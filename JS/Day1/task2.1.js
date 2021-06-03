function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
return count;
}

var input = prompt("Enter a message");
var wantedLetter= prompt("Enter a letter to check");

var caseSensetive= confirm("Do you want to igonre case sensitivity?");

if (caseSensetive === true){
    input.toLowerCase;
    wantedLetter.toLowerCase;
}
var result = countString(input, wantedLetter);
alert("The letter repeated" + " " + wantedLetter + " " + result);