const router = require("express").Router();
const {createNewNotes} = require("../../lib/notes");
const {notes} = require("../../data/db.json");

router.get("/notes",(req,res)=>{
  let results=notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  let noteReceived = req.body;
  noteReceived.id = notes.length+1;
  const note = createNewNotes(noteReceived, notes);
  res.json(note);
});

module.exports = router;