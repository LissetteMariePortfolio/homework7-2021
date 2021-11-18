

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
  


