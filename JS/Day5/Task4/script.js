var box = {
    books: [],
    numberOfBooks: 0,
    height: 100,
    width: 100,
    length: 100,
    volume: this.length * this.height * this.width,
    material: "Paperboard",

    createAndAddBook: function (title, type, author) {
        content = this.books;
        content.push({
            title: title,
            type: type,
            author: author,
            // height: height,
            // width: width,
            // length: length,
            // volume: length * height * width,
        })
        return this.numberOfBooks += 1;
    },

    removeBookByName: function (bookName) {
        for (var i = 0; i < this.numberOfBooks; i++) {
            for (var prop in this.books[i]) {
                if (this.books[i][prop] === bookName) {
                    this.numberOfBooks -= 1;
                    return this.books.splice(i, 1)[0];
                }
            }
        }
    },

    removeBookByType: function (type) {
        for (var i = 0; i < this.numberOfBooks; i++) {
            for (var prop in this.books[i]) {
                if (this.books[i][prop] === type) {
                    this.numberOfBooks -= 1;
                    return this.books.splice(i, 1)[0];
                }
            }
        }
    },

    toString: function () {
        return `This is a ${this.width} by ${this.height} by ${this.length} box! which contains ${this.numberOfBooks} books`
    },

    valueOf: function () {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] != 'number') {
                throw new TypeError(`Expected a number but found ${arguments[i]}`);
            }
            sum += arguments[i];
        }
        return sum;
    }
}

box.createAndAddBook("Game of thrones", "Fantasy", "George R. R. Martin");
box.createAndAddBook("Harry potter", "Fantasy", "JK Rowling");
box.createAndAddBook("Clean Code", "Technology", "Robert C. Martin");
console.log(box.numberOfBooks);
var box2 = Object.create(box);
box2.removeBookByName("Harry potter");
console.log(box2.numberOfBooks);
box2.removeBookByType("Technology")
console.log(box2.numberOfBooks);
console.log(box2.valueOf(box2.numberOfBooks, box.numberOfBooks));
console.log(box2.valueOf(box2.numberOfBooks, box2.numberOfBooks, box.numberOfBooks));