const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  accommodations:{
    guests: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('hotel', hotelSchema);