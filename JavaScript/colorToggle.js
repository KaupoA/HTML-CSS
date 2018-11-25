// var button = document.querySelector("button"); 
// document.body.style.background = null;

// button.addEventListener("click", function() {
//     if (document.body.style.background) {
//         document.body.style.background = null;
//     } else {
//         document.body.style.background = "teal";
//     }
// }); 

var button = document.querySelector("button");
var isTeal = false; 

// button.addEventListener("click", function() {
//     if (isTeal) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "teal";
//     }
//     isTeal = !isTeal;
// });

button.addEventListener("click", function() {
        document.body.classList.toggle("teal");
});