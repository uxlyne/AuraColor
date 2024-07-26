require('dotenv').config({ path: '../.env' }); // Load environment variables from .env file in the root directory

const mongoose = require('mongoose');
const Emotion = require('./models/emotion');

console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging statement
console.log('PORT:', process.env.PORT); // Debugging statement

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
  {
    name: 'Sad',
    fillColor: 'rgba(0, 0, 255, 0.6)',
    rimBorderColor: '#0000FF',
    borderType: 'solid',
    vibrancy: 8,
    texture: 'smooth',
    layerNumber: 2,
    dominance: 5,
    type: 'core',
  },
  {
    name: 'Anger',
    fillColor: 'rgba(255, 0, 0, 0.6)',
    rimBorderColor: '#FF0000',
    borderType: 'solid',
    vibrancy: 8,
    texture: 'smooth',
    layerNumber: 3,
    dominance: 7,
    type: 'core',
  },
  {
    name: 'Frustration',
    fillColor: 'rgba(255, 165, 0, 0.6)',
    rimBorderColor: '#FFA500',
    borderType: 'solid',
    vibrancy: 7,
    texture: 'rough',
    layerNumber: 4,
    dominance: 6,
    type: 'core',
  }
];

// Connect to the MongoDB database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
    mongoose.connection.close();
  });




