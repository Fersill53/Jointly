const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');

// Create new flashcard
router.post('/', async (req, res) => {
  try {
    const newCard = new Flashcard(req.body);
    const saved = await newCard.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all flashcards
router.get('/', async (req, res) => {
  try {
    const cards = await Flashcard.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
