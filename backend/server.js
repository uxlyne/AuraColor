const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Emotion = require('./models/emotion'); 

const app = express();
app.use(bodyParser.json());

const mongoURI = 'mongodb://localhost:27017/auracolor';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/emotions', async (req, res) => {
  const emotion = new Emotion(req.body);
  try {
    await emotion.save();
    res.send(emotion);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/emotions', async (req, res) => {
  const emotions = await Emotion.find();
  res.send(emotions);
});

app.get('/emotions/:name', async (req, res) => {
  const emotion = await Emotion.findOne({ name: req.params.name });
  res.send(emotion);
});

app.put('/emotions/:name', async (req, res) => {
  try {
    const emotion = await Emotion.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
    res.send(emotion);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/emotions/:name', async (req, res) => {
  try {
    await Emotion.findOneAndDelete({ name: req.params.name });
    res.send({ message: 'Emotion deleted' });
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

