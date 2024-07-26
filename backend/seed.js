// seed.js
const mongoose = require('mongoose');
const Emotion = require('./models/emotion');

// Define the initial emotions you want to add to the database
const emotions = [
  {
    name: 'Happy',
    fillColor: 'rgba(255, 223, 0, 0.6)',
    rimBorderColor: '#FFDD00',
    borderType: 'solid',
    vibrancy: 8,
    texture: 'smooth',
    layerNumber: 1,
    dominance: 5,
    type: 'core',
  },
  // You can add more emotions here
];

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/emotionsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    // Insert the emotions into the database
    return Emotion.insertMany(emotions);
  })
  .then(() => {
    console.log('Data inserted');
    // Close the database connection
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
  });
