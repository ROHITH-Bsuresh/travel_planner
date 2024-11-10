const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5002;

// MongoDB connection (updated without deprecated options)
mongoose.connect('mongodb://localhost:27017/billing')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a schema for the form data
const billingSchema = new mongoose.Schema({
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
    attendees: [
        {
            firstName: String,
            lastName: String,
            email: String,
            dob: Date,
            gender: String,
            age: Number, // Added age field
            pricing: { type: String, enum: ['adult', 'childWithBed', 'childNoBed'] }, // Added pricing field
        }
    ],
    totalCost: Number, // Added total cost field
});

// Pricing data for each package
const pricingData = {
    "Dubai New Year Group Departure ex Chennai": {
        adult: 99999,
        childWithBed: 96999,
        childNoBed: 90999
    },
    "Dubai New Year Group Departure ex Coimbatore": {
        adult: 99999,
        childWithBed: 96999,
        childNoBed: 90999
    },
    "Europe Grand Tour Group Departure ex Chennai": {
        adult: 149999,
        childWithBed: 139999,
        childNoBed: 120999
    },
    "Eastern Europe Group Departure ex Chennai": {
        adult: 149999,
        childWithBed: 129999,
        childNoBed: 109999
    },
    "Scenic UK Group Tour ex Chennai": {
        adult: 274999,
        childWithBed: 239999,
        childNoBed: 204999
    },
    "Malaysia and Singapore Group Departure ex Chennai": {
        adult: 99999,
        childWithBed: 94999,
        childNoBed: 89999
    },
    "Blissful Baku Group Tour ex Chennai": {
        adult: 79999,
        childWithBed: 73500,
        childNoBed: 63499
    },
    "Remarkable Turkey Group Tour ex Chennai": {
        adult: 164999,
        childWithBed: 148999,
        childNoBed: 137500
    }
};

const Billing = mongoose.model('Billing', billingSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle billing form submission
app.post('/api/submit-bill', async (req, res) => {
    const formData = req.body;

    // Calculate total cost based on attendees' pricing selections
    let totalCost = 0;
    formData.attendees.forEach(attendee => {
        if (attendee.pricing && pricingData[formData.package]) {
            totalCost += pricingData[formData.package][attendee.pricing];
        }
    });

    // Include the total cost in the form data
    formData.totalCost = totalCost;

    try {
        // Save the form data to MongoDB
        const newBillingEntry = new Billing(formData);
        await newBillingEntry.save();

        // Send response back to frontend
        res.status(200).json({ message: 'Form submitted successfully and stored in MongoDB!' });
    } catch (error) {
        console.error('Error saving to MongoDB:', error);
        res.status(500).json({ message: 'Error saving data to the database' });
    }
});

// Route to fetch all billing entries
app.get('/api/get-billings', async (req, res) => {
    try {
      const billings = await Billing.find();
      res.status(200).json(billings);
    } catch (error) {
      console.error('Error fetching billings:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  });

  // Delete Group Tour
app.delete('/api/delete-billing/:id', (req, res) => {
    const { id } = req.params;
    Billing.findByIdAndDelete(id)
      .then(() => res.status(200).json({ message: 'Deleted successfully' }))
      .catch((err) => res.status(500).json({ error: 'Failed to delete' }));
  });
  
  // Update Group Tour
  app.put('/api/update-billing/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body; // Get updated data from the request body
  
    Billing.findByIdAndUpdate(id, updatedData, { new: true })
      .then((updated) => res.status(200).json(updated))
      .catch((err) => res.status(500).json({ error: 'Failed to update' }));
  });
  

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
