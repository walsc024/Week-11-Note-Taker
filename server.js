const express = require("express");
const html = require("./Routes/htmlRoutes");
const api = require("./Routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/", html)
app.use("/", api)
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
