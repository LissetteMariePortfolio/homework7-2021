


var video = document.getElementById("player1");
var muteButton = document.getElementById("mute");

var slider = document.getElementById("slider");
var body = document.querySelector('body');
var getVol = "100%";
var volume = document.getElementById("volume");

 document.querySelector("#play").addEventListener("click", function() {
 	video.play();
	console.log("Play Video");
	volume.innerHTML = getVol;
 });
 document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
   console.log("Play Video");
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Video playback rate is now:" + (video.playbackRate * 100) );

	video.playbackRate = video.playbackRate - (video.playbackRate * .05);
   //If this doesn't work then do the math 
   console.log("Video playback rate is now:" + (video.playbackRate * 100) );
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Video playback rate is now:" + (video.playbackRate * 100));

	video.playbackRate = video.playbackRate + (video.playbackRate * .05);
	console.log("Video playback rate is now:" + (video.playbackRate * 100) );

 });
 document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime >= 52.403333){
		video.currentTime = 0;
	}
	else{
	video.currentTime += 15;
	}
	console.log("Video time is now:" + video.currentTime );


 });
 document.querySelector("#mute").addEventListener("click", function() {
    volumeStorage = video.volume;
	getVol = String(video.volume) + "%";
	if (muteButton.innerHTML == "Mute"){
	
	console.log(getVol);
	muteButton.innerHTML = "Unmute";
	video.volume = 0;
	volume.innerHTML = "0%";
	slider.value = "0%";
	
	}
	else{
	muteButton.innerHTML = "Mute";
	video.volume = volumeStorage;
	volume.innerHTML = getVol;
	
	}
	console.log("Video volume is now:" + video.volume );

 });

  document.querySelector("#vintage").addEventListener("click", function() {

	video.classList.add("oldSchool");
	console.log("Attempted to apply Old School Class" );


 });
slider.addEventListener('change',function(){
    video.volume = this.value / 100;
	volume.innerHTML = String(this.value) + "%";
});
 document.querySelector("#orig").addEventListener("click", function() {

	video.classList.remove("oldSchool");
	console.log("Attempted to remove Old School Class");


 });
  


