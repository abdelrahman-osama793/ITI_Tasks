const target = {
    name: "Guest",
    address: "15 Yemen road, Yemen",
    age: 25,
}

const handler = {
    set: function (target, prop, value) {
        if (prop === "name") {
            if (typeof value === "string" && value.length === 7) {
                target[prop] = value;
            } else {
                throw TypeError('Not a string or length not equal to 7 characters');
            }
        }
        if (prop === "address") {
            if (typeof value !== "string") {
                throw TypeError("Not a string");
            }
            target[prop] = value;
        }
        if (prop === "age") {
            if (prop === "age") {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer');
                }
                if (value < 25 || value > 60) {
                    throw new RangeError('The age seems invalid');
                }
            }
            target[prop] = value;
        }

    }
}

const proxy1 = new Proxy(target, handler);
console.log(proxy1);