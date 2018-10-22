require("dotenv").config();

const keys = require("./keys.js");
var request = require("request");
var spotify = new Spotify(keys.spotify);
var omdb = new Omdb(keys.omdb);
var bandsintown  = new bandsintown(keys.bandsintown);
var fs = require("fs"); //fs allows you to read and write files
var outputfile = "./log.txt";   //The request output wile be placed in a file named log
var liri_node_Argument = process.argv[2];   // Command line to process information
var queryUrl = process.argv[3]; //This is the query search 


function spotifySong(song){
    if (song === undefined){
        song = "'The Sign' by Ace of Base";
    }else{
        for(var i = 0; i<data.tracks.items[0].artits.length; i++)
    }
}