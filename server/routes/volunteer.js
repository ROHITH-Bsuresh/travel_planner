// routes/volunteer.js
const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// POST /api/volunteer
router.post('/volunteer', async (req, res) => {
  try {
    const { name, email, contact, location, reason } = req.body;

    // Check if all required fields are present
    if (!name || !email || !contact || !location || !reason) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newVolunteer = new Volunteer({
      name,
      email,
      contact,
      location,
      reason,
    });

    await newVolunteer.save();
    res.status(201).send('Volunteer application submitted successfully!');
  } catch (error) {
    console.error('Error submitting volunteer application:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
