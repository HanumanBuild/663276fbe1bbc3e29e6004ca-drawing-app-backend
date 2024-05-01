const mongoose = require('mongoose');

const DrawingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true } // Base64 encoded image
});

const Drawing = mongoose.model('Drawing', DrawingSchema);

module.exports = Drawing;