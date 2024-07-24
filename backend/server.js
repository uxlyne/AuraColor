require('dotenv').config({ path: '../.env' }); // Adjust the path to the .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Emotion = require('./models/emotion');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/emotions', async (req, res, next) => {
  const emotion = new Emotion(req.body);
  try {
    await emotion.save();
    res.status(201).send(emotion);
  } catch (error) {
    next(error);
  }
});

app.get('/emotions', async (req, res, next) => {
  try {
    const emotions = await Emotion.find();
    res.send(emotions);
  } catch (error) {
    next(error);
  }
});

app.get('/emotions/:name', async (req, res, next) => {
  try {
    const emotion = await Emotion.findOne({ name: req.params.name });
    if (!emotion) {
      return res.status(404).send({ error: 'Emotion not found' });
    }
    res.send(emotion);
  } catch (error) {
    next(error);
  }
});

app.put('/emotions/:name', async (req, res, next) => {
  try {
    const emotion = await Emotion.findOneAndUpdate({ name: req.params.name }, req.body, { new: true, runValidators: true });
    if (!emotion) {
      return res.status(404).send({ error: 'Emotion not found' });
    }
    res.send(emotion);
  } catch (error) {
    next(error);
  }
});

app.delete('/emotions/:name', async (req, res, next) => {
  try {
    const emotion = await Emotion.findOneAndDelete({ name: req.params.name });
    if (!emotion) {
      return res.status(404).send({ error: 'Emotion not found' });
    }
    res.send({ message: 'Emotion deleted' });
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});












