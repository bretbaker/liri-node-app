// allow read and set environment variables with dotenv package
require("dotenv").config();

// allow keys.js file
const keys = require("./keys.js");

// access spotify keys info
const spotify = new Spotify(keys.spotify);