// GLOBAL REQUIREMENTS
// =============================================================

// allow read and set environment variables with dotenv package
require("dotenv").config();

// allow keys.js file
const keys = require("./keys.js");

// package requirements
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');

// access spotify keys info
const spotify = new Spotify(keys.spotify);


// APPLICATION BODY
// ====================================================================================================================
// ====================================================================================================================


// concert-this
// ====================================================================================================================
if (process.argv[2] === "concert-this") {

    let artist = process.argv[3];
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL)
        .then(function (response) {
            // handle success
            // console.log(response.data);
            // loop through response.data to organize/list the desired information
            for (let i = 0; i < response.data.length; i++) {
                console.log('\n');
                console.log('Event ' + (i + 1) + ':');
                console.log('-----------------------------------');
                console.log('Name of the venue: ' + response.data[i].venue.name);
                console.log('Venue location: ' + response.data[i].venue.city + ', ' + response.data[i].venue.country);
                console.log('Date of the Event: ' + moment(response.data[i].datetime).format("MM-DD-YYYY"));
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

// spotify-this-song
// ======================================================================================================================
} else if (process.argv[2] === "spotify-this-song") {

    let queryInput;
    if (process.argv.length === 3){
        queryInput = 'The Sign Ace of Base';
    } else {
        queryInput = process.argv[3];
    }

    spotify.search({ type: 'track', query: queryInput, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log('\n');
        console.log('Artist(s): ' + data.tracks.items[0].album.artists[0].name);
        console.log('The song\'s name: ' + data.tracks.items[0].name);
        console.log('A preview link of the song from Spotify: ' + data.tracks.items[0].preview_url);
        console.log('The album that the song is from: ' + data.tracks.items[0].album.name);

    });

// movie-this
// ======================================================================================================================
} else if (process.argv[2] === "movie-this") {

    let movie;
    
    if (process.argv.length === 3) {
        movie = 'Mr. Nobody';
    } else {
        movie = process.argv[3];
    }

    let queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    axios.get(queryURL)
        .then(function (response) {
            
            // console.log(response.data);
            console.log('\n');
            console.log('Title of the movie: ' + response.data.Title);
            console.log('Year the movie came out: ' + response.data.Year);
            console.log('IMDB Rating of the movie: ' + response.data.imdbRating);
            console.log('Rotten Tomatoes Rating of the movie: ' + response.data.Ratings[1].Value);
            console.log('Country where the movie was produced: ' + response.data.Country);
            console.log('Language of the movie: ' + response.data.Language);
            console.log('Plot of the movie: ' + response.data.Plot);
            console.log('Actors in the movie: ' + response.data.Actors);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

// do-what-it-says
// ======================================================================================================================
} else if (process.argv[2] === "do-what-it-says") {

    let filename = "random.txt";
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            data = data.split(',');
            let tempArr = data[1].split('');
            tempArr.shift();
            tempArr.shift();
            tempArr.pop();
            tempArr = tempArr.join('');
            // console.log(tempArr);
            data[1] = tempArr;
            // console.log(data[1]);
            if (data[0] === 'concert-this') {
                let artist = data[1];
                // console.log(artist);
                artist = artist.split(' ');
                // console.log(artist);
                artist = artist.join('+');
                // console.log(artist);
                let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
                // console.log(queryURL);
                axios.get(queryURL)
                    .then(function (response) {
                        // handle success
                        // console.log(response.data);
                        // loop through response.data to organize/list the desired information
                        for (let i = 0; i < response.data.length; i++) {
                            console.log('\n');
                            console.log('Event ' + (i + 1) + ':');
                            console.log('-----------------------------------');
                            console.log('Name of the venue: ' + response.data[i].venue.name);
                            console.log('Venue location: ' + response.data[i].venue.city + ', ' + response.data[i].venue.country);
                            console.log('Date of the Event: ' + moment(response.data[i].datetime).format("MM-DD-YYYY"));
                        }
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            } else if (data[0] === 'spotify-this-song') {
                let queryInput;
                if (data.length === 1) {
                    queryInput = 'The Sign Ace of Base';
                } else {
                    queryInput = data[1];
                }

                spotify.search({ type: 'track', query: queryInput, limit: 1 }, function (err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }

                    console.log('\n');
                    console.log('Artist(s): ' + data.tracks.items[0].album.artists[0].name);
                    console.log('The song\'s name: ' + data.tracks.items[0].name);
                    console.log('A preview link of the song from Spotify: ' + data.tracks.items[0].preview_url);
                    console.log('The album that the song is from: ' + data.tracks.items[0].album.name);

                });
            } else if (data[0] === 'movie-this') {
                let movie;

                if (data.length === 1) {
                    movie = 'Mr. Nobody';
                } else {
                    movie = data[1];
                }

                let queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

                axios.get(queryURL)
                    .then(function (response) {

                        // console.log(response.data);
                        console.log('\n');
                        console.log('Title of the movie: ' + response.data.Title);
                        console.log('Year the movie came out: ' + response.data.Year);
                        console.log('IMDB Rating of the movie: ' + response.data.imdbRating);
                        console.log('Rotten Tomatoes Rating of the movie: ' + response.data.Ratings[1].Value);
                        console.log('Country where the movie was produced: ' + response.data.Country);
                        console.log('Language of the movie: ' + response.data.Language);
                        console.log('Plot of the movie: ' + response.data.Plot);
                        console.log('Actors in the movie: ' + response.data.Actors);

                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        }
    })
    

};