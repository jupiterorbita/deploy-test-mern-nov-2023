const Note = require('../models/note');

module.exports = {

    findAllNotes: (req, res) => {
        Note.find()
            .then((allDaNotes) => {
                res.json(allDaNotes);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    findOneSingleNote: (req, res) => {
        Note.findById(req.params.id)
            .then(oneSingleNote => {
                res.json(oneSingleNote);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    createNewNote: (req, res) => {
        Note.create(req.body)
            .then(newlyCreatedNote => {
                res.json(newlyCreatedNote);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    updateExistingNote: (req, res) => {
        Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedNote => {
                res.json(updatedNote);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    deleteAnExistingNote: (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(result => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    }
};