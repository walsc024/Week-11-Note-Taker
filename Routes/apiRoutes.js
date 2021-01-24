const router = require("express").Router();
const path = require("path");
const fs = require("fs");
//const DB = fs.readFile("../db/db.json")

module.exports = function(app) {

    app.get("/api/notes", function(req, res){

        res.json(notes);
    });
    

// API Routes 
// =================================

router.get("/api/notes", (request, response) => {
    // use fs to read db.json file and return notes as json file
    response.json(notes)
})

router.get("/api/notes/:id" ,function(req, res) {
    res.json(notes[req.params.id]);
});

router.post("/api/notes", (request, response) =>{
    // recieve a new note to use on the request body

    let newNote = req.body;
    let uniqueId = (data.length).toString();
    console.log(uniqueId);
    mewNote.id = uniqueId;
    notes.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err){
        if (err) throw (err);
    });

    res.json(notes); 
});

router.delete("/api/notes:id", (request, response) => {
    // recieve the query parameter id for a request to delete
    
    let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        notes = notes.filter(currentNote => {
            return currentNote.id != noteId;
        });
        for (currentNote of notes) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        res.json(notes);
});

}

module.exports = router