const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/api/notes", (request, response) => {
    // use fs to read db.json file and return notes as json file
})

router.post("/api/notes", (request, response) =>{
    // recieve a new note to use on the request body
})

router.delete("/api/notes:id", (request, response) => {
    // recieve the query parameter id for a request to delete
})

module.exports = router;