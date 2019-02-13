// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


//-------------------------------------------------------------//
//----------------------- AUTHORIZATION -----------------------//
//-------------------------------------------------------------//


// Initialize Spotify API wrapper
var SpotifyWebApi = require('spotify-web-api-node');

// The object we'll use to interact with the API
var spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET
});

// Using the Client Credentials auth flow, authenticate our app
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
  
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
    console.log('Got an access token: ' + spotifyApi.getAccessToken());
  
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
  });


//-------------------------------------------------------------//
//------------------------- API CALLS -------------------------//
//-------------------------------------------------------------//


app.get('/search-track', function (request, response) {
  
  // Search for a track!
  spotifyApi.searchTracks('track:Closer', {limit: 1})
    .then(function(data) {
    
      // Send the first (only) track object
      response.send(data.body.tracks.items[0]);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/category-playlists1', function (request, response) {
  
  // Get playlists from a browse category
  // Find out which categories are available here: https://beta.developer.spotify.com/console/get-browse-categories/
  spotifyApi.getPlaylistsForCategory('pop', { limit : 10 , country : "JP", locale: "en_US"})
    .then(function(data) {
    
    // Send the list of playlists
    response.send(data.body.playlists);
    
  }, function(err) {
    console.error(err);
  });
  
  
});

app.get('/category-playlists2', function (request, response) {
  
  // Get playlists from a browse category
  // Find out which categories are available here: https://beta.developer.spotify.com/console/get-browse-categories/
  spotifyApi.getPlaylistsForCategory('pop', { limit : 10 , country : "ES", locale: "es_ES"})
    .then(function(data) {
    
    // Send the list of playlists
    response.send(data.body.playlists);
    
  }, function(err) {
    console.error(err);
  });
  
  
});

app.get('/audio-features1', function (request, response) {
  
  // Get the audio features for a track ID
  spotifyApi.getAudioFeaturesForTrack('4uLU6hMCjMI75M1A2tKUQC')
    .then(function(data) {
    
      //Send the audio features object
      response.send(data.body);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/audio-features2', function (request, response) {
  
  // Get the audio features for a track ID
  spotifyApi.getAudioFeaturesForTrack('250RLekaiL1q9qZer975Eg')
    .then(function(data) {
    
      //Send the audio features object
      response.send(data.body);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/artist', function (request, response) {
  
  // Get information about an artist
  spotifyApi.getArtist('1EowJ1WwkMzkCkRomFhui7')
    .then(function(data) {
    
      // Send the list of tracks
      response.send(data.body);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/artist-top-tracks1A', function (request, response) {
  
  // Get an artist's top tracks in a country
  spotifyApi.getArtistTopTracks('0LcJLqbBmaGUft1e9Mm8HV', 'US')
    .then(function(data) {
    
      // Send the list of tracks
      response.send(data.body.tracks);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/artist-top-tracks1B', function (request, response) {
  
  // Get an artist's top tracks in a country
  spotifyApi.getArtistTopTracks('0LcJLqbBmaGUft1e9Mm8HV', 'MX')
    .then(function(data) {
    
      // Send the list of tracks
      response.send(data.body.tracks);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/artist-top-tracks2A', function (request, response) {
  
  // Get an artist's top tracks in a country
  spotifyApi.getArtistTopTracks('1snhtMLeb2DYoMOcVbb8iB', 'CA')
    .then(function(data) {
    
      // Send the list of tracks
      response.send(data.body.tracks);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/artist-top-tracks2B', function (request, response) {
  
  // Get an artist's top tracks in a country
  spotifyApi.getArtistTopTracks('1snhtMLeb2DYoMOcVbb8iB', 'US')
    .then(function(data) {
    
      // Send the list of tracks
      response.send(data.body.tracks);
    
    }, function(err) {
      console.error(err);
    });
});

app.get('/search-playlists', function(request, response){

  // Search playlists whose name or description contains 'valentine'
  spotifyApi.searchPlaylists('valentine')
    .then(function(data) {
    
      response.send(data.body.playlists.items);
    
    }, function(err) {
      console.error(err);
    });
});

//-------------------------------------------------------------//
//------------------------ WEB SERVER -------------------------//
//-------------------------------------------------------------//


// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
