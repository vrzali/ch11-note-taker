const router = require("express").Router();

const {
  createNewNote,
} = require("../../lib/notes");
const { notes } = require("../../db/db");

router.post("/notes", (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;

