// Manipulating Style
// var h1 = document.querySelector("h1"); 

// h1.style.color = "blue"; 

// var p = document.querySelector("p"); 
// p.classList.add("big"); 

// Manipulating Text and Content
var p = document.getElementsByTagName("p") [0]; 
// var ul = document.querySelector("ul"); 

// ul.innerHTML = "Cars are awesome!"; 
document.querySelector("h1").textContent = "MY DOM DEMO"; 
// document.body.innerHTML = "<h1>Goodbye!</h1>" 

// Manipulating Attributes 
var img1 = document.getElementsByTagName("img") [0]; 

// Source for the image 
// img1.getAttribute("src"); 

img1.setAttribute("src", "https://i.pinimg.com/originals/b0/de/52/b0de529ce2af2fc3bc179901451934ae.jpg"); 

var a = document.querySelector("a");
a.setAttribute("href", "http://www.facebook.com"); 
a.textContent = "FACEBOOK";

var h1 = document.querySelector("h1"); 
h1.addEventListener("click", function() {
    h1.style.background = "orange";
});

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    });
}