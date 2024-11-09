// server/models/Bill.js
const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    gender: String,
    age: Number, // Added age to calculate pricing
    pricing: { type: String, enum: ['adult', 'childWithBed', 'childNoBed'] }, // Added pricing option
});

const billSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    companyName: String,
    package: String, // Added package field
    country: String,
    streetAddress: String,
    apartment: String,
    city: String,
    state: String,
    pinCode: String,
    phone: String,
    email: String,
    orderNotes: String,
    attendees: [attendeeSchema],
    totalCost: Number, // Added total cost field
});

module.exports = mongoose.model('Bill', billSchema);
