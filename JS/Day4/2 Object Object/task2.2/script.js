var rectangle = {
    width: 0,
    height: 0,
    displayInfo: function (width, height, area, perimeter) {
        document.getElementById('msg1').innerHTML = "Width = " + width + "\n Height = " + height + "\n Area = " + area + "\n Perimeter = " + perimeter;
    },
    area: function () {
        area = this.width * this.height;
        return area;
    },
    perimeter: function () {
        perimeter = 2 * (this.width + this.height);
        return perimeter;
    },
};

rectangle.width = prompt ("Enter width:");
rectangle.height = prompt("Enter height:");
var area = rectangle.area();
var perimeter = rectangle.perimeter();
rectangle.displayInfo(rectangle.width, rectangle.height, area, perimeter);