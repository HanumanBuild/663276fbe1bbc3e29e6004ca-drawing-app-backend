const express = require('express');
const router = express.Router();
const Drawing = require('../models/DrawingModel');

// Get all drawings
router.get('/', async (req, res) => {
  try {
    const drawings = await Drawing.find();
    res.json(drawings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Save a drawing
router.post('/', async (req, res) => {
  const drawing = new Drawing({
    name: req.body.name,
    image: req.body.image
  });

  try {
    const newDrawing = await drawing.save();
    res.status(201).json(newDrawing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;