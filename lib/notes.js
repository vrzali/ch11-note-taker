const fs = require("fs");
const path = require("path");


function createNewNotes(body, notes) {
    const note =body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../data/db.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return note;
  };

  module.exports = {createNewNotes};