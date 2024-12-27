
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const volunteerRoutes = require('./routes/volunteer');

const app = express();
const PORT = 5001;


mongoose.connect('mongodb://localhost:27017/volunteerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.use(cors());
app.use(express.json());


app.use('/api', volunteerRoutes);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
