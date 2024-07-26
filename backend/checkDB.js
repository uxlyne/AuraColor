const mongoose = require('mongoose');
const Emotion = require('./models/emotion');

mongoose.connect('mongodb://localhost:27017/auracolor', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Emotion.find({ name: 'Sad' });
  })
  .then(emotions => {
    if (emotions.length > 0) {
      console.log('Emotion found:', emotions);
    } else {
      console.log('Emotion not found');
    }
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.connection.close();
  });
