function palindrome(str) {
    var re = /[\W_]/g;

    var lowRegStr = str.replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 

    return reverseStr === lowRegStr;
}

var input = prompt("Enter a message");
var caseSensetive= confirm("Do you want to igonre case sensitivity?");

if (caseSensetive === true){
    var result = palindrome(input.toLowerCase());
} else {
    var result = palindrome(input);
}

if (result === true){
    alert(input + " is palindrome");
} else {
    alert(input + " is not palindrome");
}