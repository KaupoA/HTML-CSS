function printReverse() {
    var array = [1, 2, 3, 4];

    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform() {
    var array = [1, 1, 1, 2, 1]; 

    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            return false;
        }
    }
    return true;
}

// function sumArray () {
//     var array = [-10, 100];
//     var result = 0; 

//     for (var i = 0; i < array.length; i++) {
//         result += array[i];
//     }    
//     console.log(result);
// }

function sumArray(arr) {
    var total = 0; 
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

function max() {
    var array = [-5, -100, 29];
    var max = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(max);
}