const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// POST /api/volunteer (to submit a new volunteer)
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

// GET /api/get-volunteers (to fetch all volunteer data)
router.get('/get-volunteers', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    console.error('Error fetching volunteer data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// PUT /api/update-volunteer/:id (to update a volunteer's details)
router.put('/update-volunteer/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, contact, location, reason } = req.body;

  // Validate the provided fields
  if (!name || !email || !contact || !location || !reason) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Find the volunteer by ID and update their details
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      id,
      { name, email, contact, location, reason },
      { new: true }
    );

    if (!updatedVolunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    res.status(200).json(updatedVolunteer);
  } catch (error) {
    console.error('Error updating volunteer:', error);
    res.status(500).json({ error: 'Failed to update volunteer' });
  }
});

// DELETE /api/delete-volunteer/:id (to delete a volunteer)
router.delete('/delete-volunteer/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the volunteer by ID and delete
    const deletedVolunteer = await Volunteer.findByIdAndDelete(id);

    if (!deletedVolunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (error) {
    console.error('Error deleting volunteer:', error);
    res.status(500).json({ error: 'Failed to delete volunteer' });
  }
});

module.exports = router;
