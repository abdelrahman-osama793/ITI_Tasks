/*-------------------------------------task1-------------------------------------*/

console.log(`Task 1`);
let x = 1;
let y = 5;
[x, y] = [y, x];
console.log(x);
console.log(y);

/*-------------------------------------task2-------------------------------------*/

console.log(`\n\nTask 2`);

function maxAndMin(a, ...myParams) {
    let arr = [1, ...a, 2, ...myParams, 120, 10];
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    console.log(`The maximum is: ${max}`);
    console.log(`The minimum is: ${min}`);
}

maxAndMin([2, 9, 8, 21, 70], 800, 89, 1000, 50);

/*-------------------------------------task3-------------------------------------*/
console.log(`\n\nTask 3`);

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

function checkIfString(fruits) {
    let check = fruits.every(fruit => (typeof fruit === "string"));
    check === true ? console.log("\nAll elements are strings") : console.log("\nNot all elements are strings");

}

function checkIFStartWithA(fruits) {
    const startsWithA = fruits.filter((fruit) => fruit.startsWith("a"));
    console.log(`\nthis word starts with "a": ${startsWithA}`);
}

function checkIFStartWithBorS(fruits) {
    const startsWithBorS = fruits.filter((fruit) => fruit.startsWith("s") || fruit.startsWith("b"));
    console.log(`\nthis words starts with "b" or "s": ${startsWithBorS}`);
}

function addILike(fruits) {
    let iLikeArray = fruits.map(fruit => (`I like ${fruit}`));
    iLikeArray.forEach(fruit => console.log(fruit));
}

checkIfString(fruits);
checkIFStartWithA(fruits);
checkIFStartWithBorS(fruits);
addILike(fruits);