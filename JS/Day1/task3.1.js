var sum = 0;
var mul = 1;
var num = [];
var input = prompt("Enter a number: \nPress 0 to stop");
while (input !== "0"){
    input = parseInt(input);
    num.push(input);
    var input = prompt("Enter a number: \nPress 0 to stop");
}
var div = num[0];
for(i = 0; i < num.length; i++){
    sum += num[i];
    mul *= num[i];
}
for(i = 1; i < num.length; i++){
    div /= num[i];
}
            
    document.write("<h3>" +"sum of the 3 values ".fontcolor("red") + sum+ "</h3>");
    document.write("<h3>" +"multiplication of the 3 values ".fontcolor("red") + mul +"</h3>");
    document.write("<h3>" +"division of the 3 values ".fontcolor("red") +div+  "</h3>");