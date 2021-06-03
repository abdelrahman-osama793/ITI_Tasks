var sum = 0;
var input;
while (true) {
    input = sum === 0
        ? Number(prompt("Enter a number: \n" + "Press 0 to exit"))
        : Number(prompt("Sum: " + sum + "\nEnter a number\n" + "Press 0 to exit"));
    if (input === 0) {
        alert("You Pressed 0");
        break;
    } else {
        sum += input;
        if (sum > 100) {
        alert("sum exceeded 100");
        break;
        }
    }
}