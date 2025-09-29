const mongoose = require('mongoose');

const expertSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true},
  name: { type: String, required: true },
  role: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('expert', expertSchema);