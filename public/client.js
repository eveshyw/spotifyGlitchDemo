// client-side js
// run by the browser each time your view template is loaded

$(function() {
    
  $.get('/search-track', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    var trackName = $('<h3>' + '<a href="' + data.external_urls.spotify+ '">'+data.name + '</a>' +'</h3>');
    trackName.appendTo('#search-track-container');
    // DISPLAY THE ARTIST NAME
    var artists = "";
    data.artists.forEach(function(artist){
                        if (artists == ""){artists=artists+artist.name;}
                        else{artists=artists +" & "+artist.name;}
                         });
    var artistName = $('<h3>' + artists+ '</h3>');
    artistName.appendTo('#search-track-container');
    
    // Display the album art
    var img = $('<img/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#search-track-container');
  });
  
  $.get('/category-playlists1', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists1', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display category 1
    var cat1 = $("<h3>Japan</h3>");
    cat1.appendTo("#category-playlists-container");
    
    // Display the covers of the playlists
    data.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
    
  });
  
    $.get('/category-playlists2', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists2', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
      
    // Display category 2
    var cat2 = $("<h3>Spain</h3>");
    cat2.appendTo("#category-playlists-container");
    
    // Display the covers of the playlists
    data.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
    
  });
  
  
  $.get('/audio-features1', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features1', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "liveness", "tempo"]
  
    // Display track 1
    var track1 = $("<h3>Never Gonna Give You Up</h3>");
    track1.appendTo("#audio-features-container");
    
    // Display the audio features
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        var feature = $('<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>');
        feature.appendTo('#audio-features-container');
      }
    });
  });
  
    $.get('/audio-features2', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features2', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "liveness", "tempo"];
    
    // Display track 2
    var track2 = $("<h3>If We Were Vampires</h3>");
    track2.appendTo("#audio-features-container");
    
    // Display the audio features
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        var feature = $('<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>');
        feature.appendTo('#audio-features-container');
      }
    });
  });
  
  $.get('/artist', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the artist's image
    var img = $('<img class="circle-image" />');
    img.attr('src', data.images[0].url);
    img.appendTo('#artist-container');
    
    // Display the artist name
    var trackName = $('<h3>' + data.name + '</h3>');
    trackName.appendTo('#artist-container');
    
    // Display the artist's genres
    data.genres.map(function(genre, i) {
      var genreItem = $('<p>' + genre + '</p>');
      genreItem.appendTo('#artist-container');
    });
    
    // Display the artist's popularity value
    var popularityValue = $('<p>Popularity Value: ' + data.popularity + '</p>');
    popularityValue.appendTo('#artist-container');
    
    // Display number of followers
    var followers = $('<p>Followers: ' + data.followers.total + '</p>');
    followers.appendTo('#artist-container');
  });
  
  $.get('/artist-top-tracks1A', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks1A', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display artist name & country
    var artist = $('<h3>Artist: ' + data[0].artists[0].name + '</h3>');
    var country = $('<h4>Country: US</h4>');
    artist.appendTo('#top-tracks-container1A');    
    country.appendTo('#top-tracks-container1A');
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container1A');
    });
  });
  
  $.get('/artist-top-tracks1B', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks1B', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display artist name & country
    var artist = $('<h3>Artist: ' + data[0].artists[0].name + '</h3>');
    var country = $('<h4>Country: Mexico</h4>');
    artist.appendTo('#top-tracks-container1B');    
    country.appendTo('#top-tracks-container1B');
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container1B');
    });
  });
  
    $.get('/artist-top-tracks2A', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks2A', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display artist name & country
    var artist = $('<h3>Artist: ' + data[0].artists[0].name + '</h3>');
    var country = $('<h4>Country: Canada</h4>');
    artist.appendTo('#top-tracks-container2A');    
    country.appendTo('#top-tracks-container2A');
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container2A');
    });
  });
  
    $.get('/artist-top-tracks2B', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks2B', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display artist name & country
    var artist = $('<h3>Artist: ' + data[0].artists[0].name + '</h3>');
    var country = $('<h4>Country: US</h4>');
    artist.appendTo('#top-tracks-container2B');    
    country.appendTo('#top-tracks-container2B');
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container2B');
    });
  });
  
  $.get('/search-playlists', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Intro
    $("<h4>In this section, you can search for a certain number of playlists that contain the keyword \
      in their names or descriptions. Here for example, we are showing 20 playlists related to 'valentine'. \
      You can simply click the playlist that interests you to go to Spotify and listen to that playlist. </h4>")
      .appendTo('#playlists-container');
    
    // Display playlist names and link them to destinations
    data.map(function(playlist, i) {
      var playlistName = $('<p><a href="'+ playlist.external_urls.spotify + '">'+ playlist.name + '</a></p>');
      playlistName.appendTo('#playlists-container');
    });
  });
  
    


});
