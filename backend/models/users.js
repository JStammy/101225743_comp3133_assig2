const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: [true, 'Please enter user ID'],
    trim: true
  },
  username: {
    type: String,
    required: [true, 'Please enter username'],
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please enter password']
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
    trim: true
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
