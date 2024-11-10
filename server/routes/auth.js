const express = require('express');
const bcrypt = require('bcryptjs'); // Use bcryptjs instead of bcrypt
const router = express.Router();
const User = require('../models/User');

// Register Route
router.post('/register', async (req, res) => {
  const { id, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ id });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this ID already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ id, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred during registration' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { id, password } = req.body;

  try {
    // Find user by ID
    const user = await User.findOne({ id });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials: User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials: Incorrect password' });
    }

    // Send success response with user ID
    res.json({ message: 'Login successful', user: { id: user.id } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred during login' });
  }
});

module.exports = router;
