function numSequence(start, end, step) {
    var orgList = [];

    function listPush(list) {
        for (let i = start; i <= end; i += step) {
            list.push(i);
        }
    }

    listPush(orgList);

    Object.defineProperty(this, 'append', {
        get: function () {
            return function (num) {
                if (num >= orgList[orgList.length - 1]) {
                    if (num - orgList[orgList.length - 1] === step) {
                        orgList.push(num);
                    } else {
                        throw Error(`Out of sequence \n The sequence is ${step}`);
                    }
                } else {
                    throw Error(`Smaller than the biggest value: ${orgList[orgList.length - 1]}`);
                }
            }
        }
    });

    Object.defineProperty(this, 'prepend', {
        get: function () {
            return function (num) {
                if (num <= orgList[0]) {
                    if (orgList[0] - num === step) {
                        orgList.unshift(num);
                    } else {
                        throw Error(`Out of sequence \n The sequence is ${step}`);
                    }
                } else {
                    throw Error(`Bigger than the smallest value: ${orgList[0]}`);
                }
            }
        }
    });

    Object.defineProperty(this, 'pop', {
        get: function () {
            return function () {
                return orgList.pop();
            }
        }
    });

    Object.defineProperty(this, 'dequeue', {
        get: function () {
            return function () {
                return orgList.shift();
            }
        }
    });

    Object.defineProperty(this, 'display', {
        get: function () {
            return function () {
                return orgList.toString(`Your Array is: ${orgList}`);
            }
        }
    });

}

var newObj = new numSequence(2, 20, 2);