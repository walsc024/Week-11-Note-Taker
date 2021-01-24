const fs = require("fs")
const util = require("util");
const promisifyReadFile = util.promisify(fs.readFile);
class databaseFunctionality {
    getNotes(){
        const dbContents = promisifyReadFile("db/db.json");
        console.log(dbCOntents)
    }
    addNote(){}
    deleteNote(){}
}
module.exports = new databaseFunctionality();