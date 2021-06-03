var sum = 0;
function checkSumAndParam() {
  try {
    if (arguments.length == 0) {
      throw new RangeError("Empty parameters! Please enter some");
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
          throw new RangeError("parameter is not a number");
        } else {
          sum += arguments[i];
        }
      }
      alert("Sum= " + sum);
    }
  } catch (error) {
    if (error instanceof RangeError) {
      alert(error.message);
    }
  }
}