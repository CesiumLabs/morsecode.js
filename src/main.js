const morse = require("./morse");
const audio = require("./audio");

/**
 * Encodes normal text into morse code
 * @param {string} text Text to encode
 * @returns {string}
 */
function Encode(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    const data = text.toLowerCase().split("");
    return data.map(m => morse[m] || "").join(" ");
}

/**
 * Decodes morse code
 * @param {string} text Morse code to decode
 */
function Decode(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    const data = text.split(" ");
    const table = Object.values(morse);
    const ids = [];

    data.forEach(txt => {
        const get = table.findIndex(x => x === txt);
        if (get !== -1) ids.push(get);
    });

    let str = "";
    ids.forEach(id => str += (Object.keys(morse)[id] || ""));

    return str;
}

/**
 * Creates audio stream of a morse code
 * @param {string} text Morse code
 */
function CreateAudio(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    
    try {
        const stream = audio(text);
        return stream;
    } catch(e) {
        return null;
    }
}

module.exports = {
    Encode,
    Decode,
    CreateAudio
};