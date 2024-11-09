// server/routes/billing.js
const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');

router.post('/submit', async (req, res) => {
    try {
        const newBill = new Bill(req.body);
        await newBill.save();
        res.status(201).json({ message: 'Billing information saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save billing information.' });
    }
});

module.exports = router;
