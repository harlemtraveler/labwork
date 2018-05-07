/*
This function should take a string and write a file called
studentGroups.txt to the directory from which it's called. You will need to require the
node fs object and use the fs.writeFile method. Google it.
*/
const express require('express');
const fs = require('fs');
const url = request('url');
const logger = require('morgan');
const bodyParser = require('bodyParser');
const msg = "";
const studentGroupsFile = 'studentGroups.txt'

const app = express();

function writeFile() {
  fs.writeFile(studentGroups.txt, msg, (err) => {
    if(err) throw err;
    console.log(`File saved to ${studentGroupsFile}`);
  })
}

modlue.exports = {
  writeFile
}
