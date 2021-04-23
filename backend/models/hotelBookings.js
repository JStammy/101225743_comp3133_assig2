const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    required: [true, 'Please enter user ID'],
    unique: [true, 'Hotel ID already exists'],
    trim: true
  },
  booking_date: {
    type: String,
    default: Date.now(),
    required: [true, 'Please eneter booking date'],
    lowercase: true,
            validate: function(value) {
                var dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
                return dateRegex.test(value)
            }
  },
  booking_start: {
    type: String,
    required: [true, 'Please enter the starting date'],
    lowercase: true,
            validate: function(value) {
                var dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
                return dateRegex.test(value)
            }
  },
  booking_end: {
    type: String,
    required: [true, 'Please enter the ending date'],
    lowercase: true,
            validate: function(value) {
                var dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
                return dateRegex.test(value)
            }
  },
  user_id: {
    type: Number,
    ref: 'User'
  }
});

const HotelBooking = mongoose.model('HotelBooking', BookingSchema);
module.exports = HotelBooking;
