var numbofdrums= document.querySelectorAll("button").length;

for(var i=0;i<numbofdrums;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var c= this.innerHTML;
    playaudio(c);
    animated(c);

  });
}

document.addEventListener("keypress",function(event){
  playaudio(event.key);
  animated(event.key);
});

function playaudio(event){
  var audio;
  switch (event) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    default:
      break;

  }
}

function animated(event){
  var active= document.querySelector("."+event);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");},100);
}
