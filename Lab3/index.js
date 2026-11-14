const W_button=document.querySelector(".w");
const A_button=document.querySelector(".a");
const S_button=document.querySelector(".s");
const D_button=document.querySelector(".d");
const J_button=document.querySelector(".j");
const K_button=document.querySelector(".k");
const L_button=document.querySelector(".l");


var sounds = {
  w: "tom-1.mp3",
  a: "tom-2.mp3",
  s: "tom-3.mp3",
  d: "tom-4.mp3",
  j: "crash.mp3",
  k: "kick-bass.mp3",
  l: "snare.mp3"
};


function playSound(key) {
  var audio = new Audio(sounds[key]);
  audio.play();
}


function animateButton(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000);
}

W_button.addEventListener("click", function(){
    console.log("w button was clicked"); 
    playSound("w");
    animateButton("w");
});

A_button.addEventListener("click", function(){
    console.log("a button was clicked"); 
    playSound("a");
    animateButton("a");
});

S_button.addEventListener("click", function(){
    console.log("s button was clicked"); 
    playSound("s");
    animateButton("s");
});

D_button.addEventListener("click", function(){
    console.log("d button was clicked"); 
    playSound("d");
    animateButton("d");
});

J_button.addEventListener("click", function(){
    console.log("j button was clicked"); 
    playSound("j");
    animateButton("j");
});

K_button.addEventListener("click", function(){
    console.log("k button was clicked"); 
    playSound("k");
    animateButton("k");
});

L_button.addEventListener("click", function(){
    console.log("l button was clicked"); 
    playSound("l");
    animateButton("l");
});


document.addEventListener("keydown", function (event) {
  if ("wasdjkl".includes(event.key)) {
    playSound(event.key);
    animateButton(event.key);
  }
});