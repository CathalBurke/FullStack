



function sayName(){

    console.log(this.Name);
}

const cat={
    name:"sinba",
    speak:sayName

};

const dog={
    name:"rex",
    speak:sayName

};

cat.speak();
dog.speak();


person1={
    name:"tom",
    greet(){
        console.log(`hello ${person1.name}`);
    }
}

person1.greet();

person2={
    name:"jerry",
    greet:person1.greet
}

person2.greet();
// this is determined when the function is called, which object called the function

//event listener

const button=document.querySelector(".btn");

button.addEventListener("click", function(){
    console.log(this);
})
//this == button when the button is clicked 

button.addEventListener("click", function(){
    this.style.backroundColor="red";
})

// this works here because button is a (DOM) object 
// js automaticaly sets this to the element handeling the event

console.log(this);
button.addEventListener("click",()=>{
    console.log(this);

});

const obj={
    name:"object",

    regular(){
        button.addEventListener("click", function(){
            console.log("regular", this);
        });
    },

    arrow(){
        button.addEventListener("click",()=>{
        console.log("Arrow",this);
        });

    }
}

obj.arrow();
obj.regular();
