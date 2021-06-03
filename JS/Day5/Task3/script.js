var Shape = function (width, height) {
    if (this.constructor == Shape) {
        throw Error("Can not another instance");
    }
    this.width = width;
    this.height = height;
}

Shape.prototype.shapeArea = function () {
    return area = this.width * this.height;
}

Shape.prototype.shapePerimeter = function () {
    return perimeter = 2 * (this.width + this.height);
}

Shape.prototype.toString = function () {
    document.getElementById("info").innerHTML =
        `Width = ${this.width}<br>
    Height = ${this.height}<br>
    Area = ${this.shapeArea()}<br>
    Perimeter = ${this.shapePerimeter()} `
}

var Rectangle = function (width, height) {
    Shape.call(this, width, height);
    if (this.constructor == Rectangle) {
        if (Rectangle.rectangleObj >= 1) {
            throw Error("Can't create more then one Rectangle object");
        } else {
            Rectangle.rectangleObj++;
        }
    }
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.rectangleObj = 0;


var Square = function (width, height) {
    Rectangle.call(this, width, height);
    if (this.constructor == Square) {
        if (Square.squareObj >= 1) {
            throw Error("Can't create more then one Rectangle object");
        } else {
            Square.squareObj++;
        }
    }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.squareObj = 0;



// var height = prompt("Enter Height:");
// var width = prompt("Enter width:");

// var newRec = new Shape(height, width);
// newRec.toString();