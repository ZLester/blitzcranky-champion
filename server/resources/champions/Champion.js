const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
  colors: {
    title: String,
    subtitle: String,
    role: String,
  },
  id: {
    type: Number,
    unique: true,
  },
  key: String,
  name: String,
  title: String,
  lore: String,
  blurb: String,
  tags: [{
    type: String,
  }],
  info: {
    attack: String,
    defense: Number,
    magic: String,
    difficulty: String,
  },
  icon: String,
  background: String,
});

module.exports = mongoose.model('Champion', championSchema);
