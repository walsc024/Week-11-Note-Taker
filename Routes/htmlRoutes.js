const express = require('express')
const path = require('path')
const router = express.Router()
// getting the notes.html file and presenting back 
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"))
})
// getting any url that isnt notes they are given the index file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
module.exports = router;