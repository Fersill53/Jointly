const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
    term: {type: String, required: true},
    
    definition: {type: String, required: true},

    region: {type: String, enum: ['knee', 'foot', 'hand', 'shoulder', 'hip'], required: true},

    image: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('Flashcard', flashcardSchema);