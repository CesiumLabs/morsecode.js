const morse = require("../index");
const fs = require("fs");
const message = "This is my message";

const morseCode = morse.Encode(message);
console.log(morseCode);