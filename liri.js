//Files inside ".env" are imported in liri.js
require("dotenv").config();

//list of variables needed for the applicatopn
// =====================================================

// Import the API keys
const keys = require("./keys");

// Import the FS package for read/write. fs allows you to read and write files
const fs = require("fs");
var request = require("request");

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");
// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);

// Import the moment npm package.
var moment = require("moment");

// Add OMDB API Key
var omdb = keys.omdb.id;

// Add BandsInTown API Key
var bandsintown = keys.bandsintown.id;


//var outputfile = "./log.txt";   //The request output wile be placed in a file named log
var liri_node_Argument = process.argv[2];   // Command line to process information
var keyword = process.argv[3]; //This is the key search 

//The switch statement makes it possible to change the 3rd Argument to (concert-this or movie-this...)
switch (liri_node_Argument) {
  case "spotify-this-song":
    spotifySong(keyword);
    break;

  case "concert-this":
    concertVenue(keyword);
    break;

  case "movie-this":
    omdbRequest(keyword);
    break;

  case "do-what-it-says":
    do_What_It_Says(keyword);
    break;

  default: console.log("LIRI doesn't know that");
}

//List of function for each case in the Switch statement
function spotifySong(keyword) {
  spotify.search({ type: 'track', query: keyword }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    for (var i = 0; i < data.tracks.items[i].artists.length; i++) {
      console.log("Artists: " + data.tracks.items[i].artists[i].name);
      console.log("Song: " + data.tracks.items[i].name);
      console.log("Preview Link: " + data.tracks.items[i].preview_url);
      console.log("Album: " + data.tracks.items[i].album.name);
    }
  });
  if(keyword === undefined){
    spotify.search({ type: 'track', query: "The Sign" }, function(data){
      console.log("Artists: " + data.tracks.items[i].artists[i].name);
    });
  }
}

function concertVenue(keyword) {
  request("https://rest.bandsintown.com/artists/" + keyword + "/events?app_id=" + bandsintown + "&date=upcoming", function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Venue's name : " + JSON.parse(body)[0].venue.name);
      console.log("Venue's location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region + " " +  JSON.parse(body)[0].venue.country);
      console.log("Date of event: " + JSON.parse(body)[0].datetime);
      moment().format();
    }
  })
}

function omdbRequest(keyword) {
  var queryUrl = "http://www.omdbapi.com/?t=" + keyword + "&y=&plot=short&apikey="+omdb;
  request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("Imbd Rating: " + JSON.parse(body).imdbRating);
      //Not all movies have rotten tomatoes ratings, so this loop check if there is one and display its value
      for(var i = 0; i < JSON.parse(body).Ratings.length; i++) {
	    	if(JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
	    		console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].Value);
	    	}
      }
      console.log("Country of production: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors/Actresses: " + JSON.parse(body).Actors);
    }
    if(keyword === undefined){
      keyword === "Mr.Nobody";
      queryUrl = "http://www.omdbapi.com/?t=" + keyword + "&y=&plot=short&apikey="+omdb;
      
      console.log("If you haven't watched 'Mr. Nobody,' then you should: " +"\n"+JSON.parse(body).Website +"\nIt's on Netflix!");
    }
  });
}

function do_What_It_Says(){
  fs.readFile("random.txt","utf-8", function(err, data){
    if(err){
      console.log(err);
    }else{
      var result = data.split(',');
      spotifySong(result[0], result[1]);
      console.log(data.split(','));
      spotifySong(data.split(','));
    }
  })
}