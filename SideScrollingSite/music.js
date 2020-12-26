/* 
References:

https://www.geeksforgeeks.org/create-a-music-player-using-javascript/ 
*/

// Variables
var nowPlaying = document.getElementById("nowPlaying");
var trackPic = document.getElementById("trackPic");
var trackTitle = document.getElementById("trackTitle");
var trackArtist = document.getElementById("trackArtist");

var playPauseButton = document.getElementById("playPauseButton");
var nextSong = document.getElementById("nextSong");
var prevSong = document.getElementById("prevSong");

var seekControl = document.getElementById("seekControl");
var volumeControl = document.getElementById("volumeControl");
var currentTime = document.getElementById("currentTime");
var trackLength = document.getElementById("trackLength");

var trackNumber = 0;
var isPlaying = false;
var timeUpdater;

// Create new audio element
var currentTrack = document.createElement("audio");

// Define the tracks that have to be played
var tracksList = [{
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3",
  },
  {
    name: "Enthusiast",
    artist: "Tours",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3",
  },
  {
    name: "Shipping Lanes",
    artist: "Chad Crouch",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },
  {
    name: "Flow",
    artist: "Hydroone",
    image: "https://www.kickassfacts.com/wp-content/uploads/2013/12/River.jpg",
    path: "song4.mp3",
  },
];

// Choose random background colour for webpage
function randomBgColour() {
  // Get a number between 64 to 256 (for getting lighter colours)
  // if multiplication results in 0, minimum will be 64, if multiplication results in 255, 255 will be taken as highest vlue
  var red = Math.floor(Math.random() * 256) + 64;
  var green = Math.floor(Math.random() * 256) + 64;
  var blue = Math.floor(Math.random() * 256) + 64;

  // Construct a colour withe the given values
  var bgColour = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that colour
  document.body.style.background = bgColour;
}

// load track based on track number
function trackLoad(trackNumber) {
  clearInterval(timeUpdater);
  resetValues();
  currentTrack.src = tracksList[trackNumber].path;
  currentTrack.load();

  trackPic.style.backgroundImage = "url(" + tracksList[trackNumber].image + ")";
  trackTitle.textContent = tracksList[trackNumber].name;
  trackArtist.textContent = tracksList[trackNumber].artist;
  nowPlaying.textContent =
    "PLAYING " + (trackNumber + 1) + " OF " + tracksList.length;

  timeUpdater = setInterval(seekUpdate, 1000);
  currentTrack.addEventListener("ended", nextSong);
  randomBgColour();
}

function resetValues() {
  currentTime.textContent = "00:00";
  trackLength.textContent = "00:00";
  seekControl.value = 0;
}

// Load the first track in the tracklist
trackLoad(trackNumber);

function playPause() {
  if (!isPlaying) playSong();
  else pauseSong();
}

function playSong() {
  currentTrack.play();
  isPlaying = true;
  playPauseButton.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseSong() {
  currentTrack.pause();
  isPlaying = false;
  playPauseButton.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextSong() {
  if (trackNumber < tracksList.length - 1) trackNumber += 1;
  else trackNumber = 0;
  trackLoad(trackNumber);
  playSong();
}

function prevSong() {
  if (trackNumber > 0) trackNumber -= 1;
  else trackNumber = tracksList.length;
  trackLoad(trackNumber);
  playSong();
}

function seekTo() {
  seekto = currentTrack.duration * (seekControl.value / 100);
  currentTrack.currentTime = seekto;
}

function setVolume() {
  currentTrack.volume = volumeControl.value / 100;
}

function seekUpdate() {
  var seekPosition = 0;

  if (!isNaN(currentTrack.duration)) {
    seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);

    seekControl.value = seekPosition;

    var currentMinutes = Math.floor(currentTrack.currentTime / 60);
    var currentSeconds = Math.floor(
      currentTrack.currentTime - currentMinutes * 60
    );
    var durationMinutes = Math.floor(currentTrack.duration / 60);
    var durationSeconds = Math.floor(
      currentTrack.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    currentTime.textContent = currentMinutes + ":" + currentSeconds;
    trackLength.textContent = durationMinutes + ":" + durationSeconds;
  }
}