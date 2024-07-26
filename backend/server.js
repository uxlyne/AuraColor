require('dotenv').config({ path: '../.env' }); // Ensure .env is being loaded correctly from the root directory
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const emotionRoutes = require('./routes/emotionRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*', // Allow all origins for development purposes
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow the necessary headers
}));

console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging statement
console.log('PORT:', process.env.PORT); // Debugging statement

const mongoURI = process.env.MONGO_URI; // Use MONGO_URI from .env
const PORT = process.env.PORT || 5001;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/emotions', emotionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});






















