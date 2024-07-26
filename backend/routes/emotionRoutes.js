const express = require('express');
const Emotion = require('../models/emotion');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const emotion = new Emotion(req.body);
  try {
    await emotion.save();
    res.status(201).send(emotion);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const emotions = await Emotion.find();
    res.send(emotions);
  } catch (error) {
    next(error);
  }
});

router.get('/:name', async (req, res, next) => {
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

router.put('/:name', async (req, res, next) => {
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

router.delete('/:name', async (req, res, next) => {
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

module.exports = router;


