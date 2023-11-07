const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} must be at least 3 chars"]
    },
    content: {
        type: String,
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;