const User = require('../models/users');
const Hotel = require('../models/hotels');

module.exports = {
  users: async function () {
    const users = await User.find();
    return {
      users: users.map(item => {
        return {
          ...item._doc,
          user_id: item.user_id.toString()
        };
      })
    };
  },
  
         addBooking: async (parent, args) => {
            console.log(args)
            
            const dateExpression = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
            const isValidDate = dateExpression.test(String(args.booking_date, args.booking_start, args.booking_end))
            
            if(!isValidDate){
                throw new Error("Please follow the proper format. MM/DD/YYYY.")
            }


            let newBooking = new Booking ({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id
            });
            return await newBooking.save()
  
  addUser: async function ({ userInput }) {
    const user = new User({
      user_id: userInput.user_id,
      username: userInput.username,
      password: userInput.password,
      email: userInput.email
    });
    const addUser = await user.save();
    return {
      ...addUser._doc,
      user_id: addUser.user_id.toString()
    };
  },
  hotels: async function () {
    const hotels = await Hotel.find();
    return {
      hotels: hotels.map(item => {
        return {
          ...item._doc,
          hotel_id: item.hotel_id.toString()
        };
      })
    };
  }
};
