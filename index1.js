//exaples of evvent listeners
//1
const button=document.getElementById("btn");

button.onclick=function(){
    console.log("first");
}

button.onclick=function(){
    console.log("second");
}

button.addEventListener("click", function(){
    console.log("button was clicked"); 
});
button.addEventListener("click", function(){
    console.log("button was clicked, function 2"); 
});

//mouseover event
const box=document.querySelector("#box")
box.addEventListener("mouseover",function() {
    console.log("mouse entered box");
    
})
//mouse out event

box.addEventListener("mouseout",function() {
    console.log("mouse left box");
    
})

//input
const nameInput=document.getElementById("nameInput")
nameInput.addEventListener("input",function(){
    console.log("current value",nameInput.value);
})
//keypress
document.addEventListener("keypress",function(event){
    console.log(event);
    console.log("you pressed", event.key);
})

//focus
nameInput.addEventListener("focus", function(){
    console.log("input gained focus");
})


//blur
nameInput.addEventListener("blur", function(){
    console.log("input lost focus");
})

//submit
const myForm=document.getElementById(("myForm"));
myForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("form submitted");
})

//dblclick
//contextmenu

