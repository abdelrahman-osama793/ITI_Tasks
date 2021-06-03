var anime = {
    name: "Demon Slayer",
    episodes: "26",
    movies: "1",
    watch: function () { }
};

getSetGen = function (obj) {
    for (var prop in obj) {
        if (Object.hasOwnProperty.call(obj, prop)) {
            if (typeof obj[prop] !== "function") {
                keyFunc = `get${prop}`;
                obj[keyFunc] = new Function(`return this.${prop}`);
                keyFunc = `set${prop}`;
                obj[keyFunc] = new Function("value", `return this.${prop}=value`);
            } else {
                alert("this is a function");
            }
        }
    }
};