class Rectangle {
    constructor(_width, _height) {
        this.width = _width;
        this.height = _height;
        Rectangle.count++;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return (this.width + this.height) * 2;
    }
    toString() {
        console.log(`Width = ${this.width}\nHeight = ${this.height}\nArea = ${this.area()}\nPerimeter = ${this.perimeter()}`)
    }

}
Rectangle.count = 0;
const r = new Rectangle(50, 10);
const r2 = new Rectangle(100, 150);
const r3 = new Rectangle(80, 60);
r.toString();
r2.toString();
r3.toString();