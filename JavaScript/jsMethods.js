// Adding methods to an object

var obj = {
    name: "Chuck",
    age: 45, 
    isCool: false, 
    friends: ["Bob", "Tina"], 
    add: function(x, y) {
        return x + y;
    }
};

var dogSpace = {};

dogSpace.speak = function() {
    return "WOOF!";
}

var catSpace = {};

catSpace.speak = function() {
    return "MEOW!";
} 

// The Keyword "this" 

var comments = {};

comments.data = ["Good job!", "Bye", "Lame..."];

comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}