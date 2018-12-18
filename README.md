# liri-node-app

## Overview
This Language Interpretation and Recognition Interface application works with Node.js in the command-line interface. The user can access to the app by installing the **Node Package Manager** for [Node Spotify Api](https://www.npmjs.com/package/node-spotify-api), [Moment.js](https://www.npmjs.com/package/moment) and [Request](https://www.npmjs.com/package/request) or install these packages by using the dependencies located in the package json: `npm install`.
## User's guide
The app is able to execute a keyword based on four command lines: spotify-this-song, movies-this, concert-this and do-what-it-says.

1. concert-this
The command line concert-this allows the user to display information about an upcoming concert of an artit. To use it, the user needs to move the app location through the terminal and enter the foolowing command line: **node liri.js concert-this "artist name"**.
![image](https://user-images.githubusercontent.com/8877411/47543156-dee10c80-d8ae-11e8-8879-25328a8107fe.png)

2. spotify-this-song
The command line spotify-this-song allows the user to display infomrmation about a song. To use it, enter the command line: **node liri.js spotify-this-song "name of the song"**.
![image](https://user-images.githubusercontent.com/8877411/47543396-0ab0c200-d8b0-11e8-8745-91cf7f681807.png)

3. movie-this
The command line movie-this allows the user to display information about a movie. To use it, enter the command line: **node liri.js movie-this "name of movie"**.
![image](https://user-images.githubusercontent.com/8877411/47543503-801c9280-d8b0-11e8-9b29-04ad240f03a1.png)

4. do-what-it-says
This command line is supposed to diplay any information entered in the random.txt file by using the 3 other commands. Unfortunately I was able to only display what is inside the random.txt and could not display info by using spotify-this-song or concert-this or movie-this.
