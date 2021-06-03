"use strict";

var rectangle = {
  width: 0,
  height: 0,
  displayInfo: function displayInfo(wd, he, area, perimeter) {
    document.getElementById('msg1').innerHTML;
  },
  area: function area() {
    _area = this.width * this.height;
    return _area;
  },
  perimeter: function perimeter() {
    _perimeter = 2 * (this.width + this.height);
    return _perimeter;
  }
};
rectangle.width = 22;
rectangle.height = 22;

var _area = rectangle.area();

var _perimeter = rectangle.perimeter();

rectangle.displayInfo(rectangle.width, rectangle.height, _area, _perimeter);