const router = require('express').Router();
const remember = require("../db/UID")

router.get('/notes', (req, res) => {
    remember
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {

    remember
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
    remember
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));


});


module.exports = router;