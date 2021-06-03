
var firstForm = function() {
    var arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr.reverse();
}
var result = firstForm(1,2,3,4,5);
console.log(result);

function reverseFunc(){
    var arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr.reverse()
}
var secondForm = reverseFunc(6,7,8,9,10);
console.log(secondForm);