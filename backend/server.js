require('dotenv').config({ path: '../.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const emotionRoutes = require('./routes/emotionRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Ensure CORS is correctly configured

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the routes
app.use('/api', emotionRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
















