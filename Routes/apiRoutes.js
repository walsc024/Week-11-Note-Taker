//create a router
const express = require("express");
const databaseFunctions = require("../db/database");
const router = express.Router();
const fs = require("fs");
//add a get request to it
router.get("/notes", (req, res) => {
  databaseFunctions.getNotes().then((myNotes) => {
    res.json(myNotes);
  });
  // Should read the `db.json` file and return all saved notes as JSON
});
//add a post request to it
router.post("/notes", (req, res) => {
  databaseFunctions.addNote(req.body).then(() => {
    res.sendStatus(200)
  })
});
//add a delete request to it
router.delete("/notes/:id", (req, res) => {
  let noteId = req.params.id;
  databaseFunctions.deleteNote(req.params.id).then(() => {
    res.sendStatus(200)
  })
});
//export the router
module.exports = router;