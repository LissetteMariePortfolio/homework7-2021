var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
var video = document.getElementById("player1");
var muteButton = document.getElementById("#mute");
var vidPlayBack = document.querySelector('video').playbackRate
var slider = document.getElementById("#slider");
var mainClass = document.querySelector('main')
var getVol;
var volume = document.getElementById("#volume");
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
 	video.play();
	console.log("Play Video");
	volume.value = slider.value;
 });
 document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
   console.log("Play Video");
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Video playback rate is now:" + vidPlayBack );

	vidPlayBack = vidPlayBack - (vidPlayBack * .05);
   //If this doesn't work then do the math 
   console.log("Video playback rate is now:" + vidPlayBack );
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Video playback rate is now:" + vidPlayBack );

	vidPlayBack = vidPlayBack + (vidPlayBack * .05);
	console.log("Video playback rate is now:" + vidPlayBack );

 });
 document.querySelector("#skip").addEventListener("click", function() {

	video.currentTime += 15;
	console.log("Video time is now:" + video.currentTime );


 });
 document.querySelector("#mute").addEventListener("click", function() {
    if (muteButton.value == "Mute"){
	getVol = video.volume;
	muteButton.value = "Unmute";
	video.volume = 0;
	volume.value = 0;
	}
	else{
	muteButton.value = "Mute";
	video.volume = getVol;
	volume.value = 0;
	}
	console.log("Video volume is now:" + video.volume );

 });
 slider.oninput = function() {
	output.innerHTML = this.value;
	volume.value = this.value;

  };
  document.querySelector("#vintage").addEventListener("click", function() {

	mainClass.addClass("oldSchool");
	console.log("Attempted to apply Old School Class" );


 });
 document.querySelector("#orig").addEventListener("click", function() {

	mainClass.removeClass("oldSchool");
	console.log("Attempted to remove Old School Class");


 });
  


