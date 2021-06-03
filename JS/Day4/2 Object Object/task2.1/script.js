var arrObject = {
    dataObj: [{
            val: 1
        },
        {
            val: 3
        },
        {
            val: 4
        },
        {
            val: 5
        },
        {
            val: 8
        },
        {
            val: 12
        },
    ],
    
    addToStart: function (arr) {
        if (arr.val < this.dataObj[0]) {
            this.dataObj.unshift(arr);
        } else throw "The value is to big not allowed to add to start";
    },
    addToEnd: function (arr) {
        if (arr.val > this.dataObj[this.dataObj.length - 1]) {
            this.dataObj.push(arr);
        } else throw "The value is to small not allowed to add to the end";
    },
    addToMiddle: function (arr) {
        var newElement;
        for (var index = 0; index < this.dataObj.length; index++) {
            if (arr.val < this.dataObj[index].val) {
                newElement = index;
            }
            if (newElement) {
                this.dataObj.splice(newElement, 1, arr);
            }
        }
    },
    checkDuplicate: function (arr) {
        var index = ll.data.findIndex(function (e) {
            return e.val === arr.val;
        });
        if (index !== -1) {
            throw "Already exists";
        }
    },
};
var newVal = {
    val: 11,
};
// arrObject.ascendingSort();
// arrObject.addToStart.call(arrObject, newVal);
arrObject.addToEnd.call(arrObject, {
    val: 13
});
arrObject.addToMiddle.call(arrObject, newVal);
console.log(arrObject.dataObj);