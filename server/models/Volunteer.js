// models/Volunteer.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  contact: {
    type: String,
    required: [true, 'Contact is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  reason: {
    type: String,
    required: [true, 'Reason for volunteering is required'],
  },
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
