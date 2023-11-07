const NoteController = require('../controllers/controller');
 
module.exports = app => {
    app.get('/api/notes', NoteController.findAllNotes);
    app.get('/api/notes/:id', NoteController.findOneSingleNote);
    app.patch('/api/notes/:id', NoteController.updateExistingNote);
    app.post('/api/notes', NoteController.createNewNote);
    app.delete('/api/notes/:id', NoteController.deleteAnExistingNote);
}