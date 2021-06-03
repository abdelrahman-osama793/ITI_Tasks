var input = document.getElementById("Answer");

function EnterNumber(value) {
    input.value += value;
}

function EnterOperator(value) {
    input.value += value;
}

function EnterEqual() {
    ans = eval(input.value);
    input.value = ans;
}

function EnterClear() {
    return (input.value = "");
}