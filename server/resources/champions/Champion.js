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
    attack: Number,
    defense: Number,
    magic: Number,
    difficulty: Number,
  },
  icon: String,
  background: String,
  emblems: [{
    type: String,
  }],
});

module.exports = mongoose.model('Champion', championSchema);
