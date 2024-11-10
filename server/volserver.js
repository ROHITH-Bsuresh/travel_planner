// volserver.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const volunteerRoutes = require('./routes/volunteer');

const app = express();
const PORT = 5001;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/volunteerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', volunteerRoutes);



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
