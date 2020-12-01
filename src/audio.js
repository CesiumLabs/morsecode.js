const fs = require("fs");
const MORSE_PING = __dirname + "/../audio/ping.mp3";
const MORSE_BLOW = __dirname + "/../audio/blow.mp3";
const { Readable } = require("stream");

/**
 * Converts morse code into node.js stream (audio)
 * @param {string} morseCode Morse code
 * @returns {Readable}
 */
module.exports = (morseCode) => {
    if (!morseCode || typeof morseCode !== "string") return null;
    const chars = morseCode.split("");
    const stream = new Readable();
    const seg = [];

    chars.forEach(char => {
        if (char === ".") {
            seg.push(fs.readFileSync(MORSE_PING));
        } else {
            seg.push(fs.readFileSync(MORSE_BLOW));
        }
    });

    seg.forEach(chunk => stream.push(chunk));
    stream.push(null);

    return stream;
};