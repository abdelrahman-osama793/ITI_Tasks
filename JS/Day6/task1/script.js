var band = document.getElementById("bandsSelector");

var option;
var xhr = new XMLHttpRequest();
var unparsedData = "";
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            unparsedData = xhr.responseText;
            // console.log(dataAjax);
            var parsedData = JSON.parse(unparsedData);
            // console.log(parsedData);
            for (var property in parsedData) {
                var i = Object.keys(parsedData).indexOf(property);
                option = document.createElement("option");
                option.value = property;
                option.text = property;
                band.appendChild(option);
                band.onchange = function () {
                    getNames(parsedData[this.value]);
                }
            }
        }
    }
};
xhr.open("Get", "rockbands.json");
xhr.send("");

function getNames(desc) {
    var people = document.getElementById("artistNames");
    if (people.options.length < 4) {
        for (var names in desc) {
            people.innerHTML += "<option value=" + desc[names].value + ">" + desc[names].name + "</option>";
        }
    } else {
        people.innerHTML = "Changes according to the band chosen";
    }
}

function openPage(url) {
    window.location.href = url;
}