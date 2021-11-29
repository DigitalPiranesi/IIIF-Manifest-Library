const fs = require('fs');
const config = require('./exampleJSONofBook.json');

//Reads JSON file, output is in variable jsonString
fs.readFile('./exampleJSONofBook.json', 'utf8', (err, jsonString) => {
    if(err) {
        console.log("error in reading JSON of book", err)
        return
    } try {
        //const data = JSON.parse(jsonString)
        //var arrays = JSON.parse(JSON.stringify(jsonString))
        //TODO iterator of sorts here

    } catch(err) {
        console.log("Cannot parse JSON of book string", err)
    }

    //Prints out string version of JSON file
    //console.log(jsonString)
})