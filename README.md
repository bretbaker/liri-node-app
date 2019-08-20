# liri-node-app
- Code Bootcamp HW Assignment #10
- A CLI app that takes input from a user and produces relevant output
- This app utilizes four node packages and three APIs
- Below are images demonstrating the functions of this app
1.  "concert-this" will search the Bands in Town Artist Events API or an artist and render the following information about each event to the terminal:
    - Name of the venue
    - Venue location
    - Date of the Event (formatted as "MM/DD/YYYY" using moment.js)
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/concert-this-1.JPG)
2.  "spotify-this-song" will show the following information about the song in your terminal/bash window by utilizing the node-spotify-api package in order to retrieve song information from the Spotify API
    - Artist(s)
    - The song's name
    - A preview link of the song from Spotify
    - The album that the song is from
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/spotify-this-song-1.JPG)
    - If no song is provided then your program will default to "The Sign" by Ace of Base
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/spotify-this-song-2.JPG)
3.  "movie-this" will output the following information to your terminal/bash window utilizing the axios package to retrieve data from the OMDP API
   - Title of the movie.
   - Year the movie came out.
   - IMDB Rating of the movie.
   - Rotten Tomatoes Rating of the movie.
   - Country where the movie was produced.
   - Language of the movie.
   - Plot of the movie.
   - Actors in the movie.
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/movie-this-1.JPG)
    - If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/movie-this-2.JPG)
4.  "do-what-it-says" utilizes the fs node package and will take the text inside of random.txt and use it to call one of the above commands
    - important note* the .txt file must contain appropriate data for both the command and the search, as it is not programmed with defaults for "spotify-this-song" and "movie-this" as above
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/do-what-it-says-1.JPG)
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/do-what-it-says-2.JPG)
![](https://github.com/bretbaker808/liri-node-app/blob/master/assets/images/do-what-it-says-3.JPG)
