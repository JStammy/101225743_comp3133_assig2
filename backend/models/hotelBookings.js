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
    required: [true, 'Please eneter booking date']
  },
  booking_start: {
    type: String,
    required: [true, 'Please enter the starting date']
  },
  booking_end: {
    type: String,
    required: [true, 'Please enter the ending date']
  },
  user_id: {
    type: Number,
    ref: 'User'
  }
});

const HotelBooking = mongoose.model('HotelBooking', BookingSchema);
module.exports = HotelBooking;
