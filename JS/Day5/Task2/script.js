var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.rectangleArea = function () {
    return area = this.width * this.height;
}

Rectangle.prototype.rectanglePerimeter = function () {
    return perimeter = 2 * (this.width + this.height);
}

Rectangle.prototype.toString = function () {
    document.getElementById("info").innerHTML =
        `Width = ${this.width}<br>
    Height = ${this.height}<br>
    Area = ${this.rectangleArea()}<br>
    Perimeter = ${this.rectanglePerimeter()} `
}

var height = prompt("Enter Height:");
var width = prompt("Enter width:");

var newRec = new Rectangle(height, width);
newRec.toString();