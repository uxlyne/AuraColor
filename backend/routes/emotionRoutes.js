// routes/emotionRoutes.js
const express = require('express');
const router = express.Router();
const Emotion = require('../models/emotion');

router.get('/emotions', async (req, res) => {
  try {
    const emotions = await Emotion.find();
    res.json(emotions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/emotions', async (req, res) => {
  const emotion = new Emotion(req.body);
  try {
    await emotion.save();
    res.status(201).send(emotion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/emotions/:name', async (req, res) => {
  try {
    const emotion = await Emotion.findOne({ name: req.params.name });
    if (!emotion) {
      return res.status(404).send({ error: 'Emotion not found' });
    }
    res.send(emotion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/emotions/:name', async (req, res) => {
  try {
    const emotion = await Emotion.findOneAndUpdate({ name: req.params.name }, req.body, { new: true, runValidators: true });
    if (!emotion) {
      return res.status(404).send({ error: 'Emotion not found' });
    }
    res.send(emotion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/emotions/:name', async (req, res) => {
  try {
    const emotion = await Emotion.findOneAndDelete({ name: req.params.name });
    if (!emotion) {
      return res.status(404).send({ error: 'Emotion not found' });
    }
    res.send({ message: 'Emotion deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

