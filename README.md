# MorseCode.JS
Simple package to encode/decode morse code.

# Installing

```sh
$ npm i morsecode.js
```

# Example

## Encoder

```js
const morse = require("@devsnowflake/morsecode.js");
const message = "This is my message";

const mc = morse.Encode(message);
console.log(mc);
// - .... .. ... / .. ... / -- -.-- / -- . ... ... .- --. .
```

## Decoder

```js
const morse = require("@devsnowflake/morsecode.js");
const mc = "- .... .. ... / .. ... / -- -.-- / -- . ... ... .- --. .";

const message = morse.Decode(mc);
console.log(mc);
// this is my message
```

## Audio Encoder

> **Note**: Audio encoder is currently not accurate and might not work properly.

```js
const morse = require("@devsnowflake/morsecode.js");
const fs = require("fs");
const message = "This is my message";

const mc = morse.Encode(message);
const audio = morse.CreateAudio(mc);

audio.pipe(fs.createWriteStream("./morse.mp3"));
```

# Join my Discord
[![](https://i.imgur.com/f6hNUfc.png)](https://discord.gg/2SUybzb)