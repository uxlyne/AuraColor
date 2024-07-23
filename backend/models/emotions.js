const mongoose = require('mongoose');

const emotionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fillColor: { type: String, required: true },
  rimBorderColor: { type: String, required: true },
  borderType: { type: String, required: true },
  vibrancy: { type: Number, required: true },
  texture: { type: String, required: true },
  layerNumber: { type: Number, required: true },
  dominance: { type: Number, required: true },
  type: { type: String, required: true } // physical, core, mental, social
});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;
