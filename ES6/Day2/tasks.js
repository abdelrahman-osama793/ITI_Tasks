/********************task1*******************/
function courses(info) {
    var coursesObj = {
        courseName: "ES6",
        courseDuration: "3days",
        courseOwner: "JavaScript",
    }

    if (Object.keys(info).length > Object.keys(coursesObj).length) {
        console.error("more than the allowed properties")
    } else {
        for (i in info) {
            if (!coursesObj.hasOwnProperty(i)) {
                console.error("there is undefined value");
            } else {
                var newInfo = Object.assign({}, coursesObj, info)
                console.log(`courseName is ${newInfo.courseName}, its duration is ${newInfo.courseDuration} and its owner is ${newInfo.courseOwner}`);

            }
        }
    }

}

var newCourse = {
    courseName: "Node.js",
    courseDuration: "10days",
    courseOwner: "JavaScript",
    // course: "12",
};

courses(newCourse)

/********************task2*******************/
function* fib1(max) {
    var current, a = 0,
        b = 1;
    yield a;
    while (b <= max) {
        current = b;
        b = a + b;
        a = current;
        yield current;
    }
}

function* fib2(count) {
    var current, a = 0,
        b = 1;
    yield a;
    for (let i = 0; i < count; i++) {
        current = b;
        b = a + b;
        a = current;
        yield current;
    }
}

for (i of fib1(200))
    console.log(i);

console.log(`\n\n`);

for (i of fib2(9))
    console.log(i);


/********************task3*******************/
var str = "this is a test text to see what will happen";
var obj = {
    [Symbol.replace](str, i) {
        return str.substring(0, i) + " ...Read more";
    }
}
console.log(str.replace(obj, 22));
/********************task4*******************/
let hello = {
    name: "Abdelrahman Osama",
    age: '22',
    courses: ["Flutter", "Node.js", "MongoDB"],
    [Symbol.iterator]() {
        let helloProperties = Object.values(this);
        let helloKeys = Object.keys(this);
        let i = 0;
        return {
            next() {
                if (i < helloProperties.length) {
                    valueArray = helloProperties[i];
                    keyArray = helloKeys[i];
                    i++;
                    return {
                        value: `${keyArray} : ${valueArray}`,
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for (const info of hello) {
    console.log(info);
}