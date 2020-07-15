function play(path){
	var audio = document.getElementById("audioPlayer");
	audio.src = "audio/" + path;
	audio.play();
}