var tag = document.getElementById("highlight"); 

var tags = document.getElementsByClassName("bolded");

var tagss = document.getElementsByTagName("h1"); 

// Returns the first element that matches a given CSS-style selector
var firstTag = document.querySelector(".bolded");

// Returns all matching elements 
var allTags = document.querySelectorAll("li"); 

var p = document.querySelector(".special");
var pS = document.querySelector("p");
var pT = document.querySelector("#first");
var pF = document.getElementById("first");
var pFi = document.getElementsByClassName("special") [0];
var pSi = document.querySelectorAll(".special") [0]; 
var pSe = document.getElementsByTagName("p") [0];
var pE = document.querySelectorAll("p") [0];
var pN = document.querySelector("h1 + p");
