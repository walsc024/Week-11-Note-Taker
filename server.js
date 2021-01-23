const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.listen(PORT, () => {
    console.log("Server Running")
})
/*
app.get("/api/notes", function(req, res){

    res.json(notes);
});

app.post("/api/notes", function(req, res){

    let newNote = req.body;
    notes.push(newNote);
    updateDB();
    return console.log("Added new note: " +newNote.title);
})
;
*/
