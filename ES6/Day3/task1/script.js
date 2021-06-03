let context = document.querySelector('canvas');
let ctx = context.getContext('2d');

class Polygon {
    constructor(numberOfSides) {
        this.numberOfSides = numberOfSides;
    }

    get area() {

    }

    toString() {
        console.log(`The area = ${this.area}`);
    }

    draw() {

    }
}

class Triangle extends Polygon {
    constructor(height, width) {
        super();
        this.width = width;
        this.height = height;
    }

    get area() {
        return (1 / 2) * this.height * this.width;
    }

    draw(startPoint, endPoint) {
        ctx.beginPath();
        ctx.moveTo(startPoint, endPoint);
        ctx.lineTo(startPoint, endPoint - this.height);
        ctx.lineTo(startPoint + this.width, endPoint);
        ctx.closePath();
        ctx.stroke();
    }

}

class Circle extends Polygon {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        return (Math.PI * Math.pow(this.radius, 2));
    }

    draw(startPoint, endPoint) {
        ctx.beginPath();
        ctx.arc(startPoint, endPoint, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class Rectangle extends Polygon {
    constructor(height, width) {
        super();
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.height * this.width;
    }

    draw(startPoint, endPoint) {
        ctx.beginPath();
        ctx.rect(startPoint, endPoint, this.width, this.height);
        ctx.stroke();
    }

}

class Square extends Polygon {
    constructor(side) {
        super();
        this.side = side;
    }

    get area() {
        return this.side * this.side;
    }

    draw(startPoint, endPoint) {
        ctx.beginPath();
        ctx.rect(startPoint, endPoint, this.side, this.side);
        ctx.stroke();
    }

}


const triangle1 = new Triangle(50, 100);
triangle1.toString();
triangle1.draw(250, 50);

const circle1 = new Circle(50);
circle1.toString();
circle1.draw(300, 150);

const rectangle1 = new Rectangle(50, 100);
rectangle1.toString();
rectangle1.draw(250, 250);

const square1 = new Square(100);
square1.toString();
square1.draw(250, 350);