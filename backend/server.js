const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Emotion = require('./models/emotion');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/auracolor', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a new emotion
app.post('/emotions', async (req, res) => {
  const emotion = new Emotion(req.body);
  try {
    await emotion.save();
    res.send(emotion);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Fetch all emotions
app.get('/emotions', async (req, res) => {
  const emotions = await Emotion.find();
  res.send(emotions);
});

// Fetch an emotion by name
app.get('/emotions/:name', async (req, res) => {
  const emotion = await Emotion.findOne({ name: req.params.name });
  res.send(emotion);
});

// Update an emotion
app.put('/emotions/:name', async (req, res) => {
  try {
    const emotion = await Emotion.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
    res.send(emotion);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an emotion
app.delete('/emotions/:name', async (req, res) => {
  try {
    await Emotion.findOneAndDelete({ name: req.params.name });
    res.send({ message: 'Emotion deleted' });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
