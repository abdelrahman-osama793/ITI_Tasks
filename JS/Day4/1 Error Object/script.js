var date = new Date();
date.setMonth(date.getMonth + 3);
var usernameVal = document.getElementById("username");
var ageVal = document.getElementById("age");
var genderVal = document.getElementsByName("gender");
var gender;
var selectedColor = document.getElementById("colorOption");
var associativeCookie = [];

function toNextPage() {
    window.location.replace("page2.html");
    for (let i = 0; i < genderVal.length; i++) {
        if (genderVal[i].checked) {
            gender = genderVal[i].value;
        }
    }
    setCookie("visitCount", 0, date.getDate());
    setCookie("usernameCookie", usernameVal.value, date);
    setCookie("ageCookie", ageVal.value, date);
    setCookie("genderCookie", gender, date);
    setCookie("colorCookie", selectedColor.value, date);
    setCookie("usernameCookie", usernameVal.value, date);
}

function setCookie(cookieName, cookieValue, expiryDate) {
    if (arguments.length === 0) {
        throw Error("Please enter 3 arguments");
    } else if (arguments.length > 3) {
        throw Error("Don't enter more than 3 arguments");
    } else {
        document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;
    }
}

function getCookie(cookieName) {
    if (arguments.length === 0) {
        throw Error("Please enter 3 arguments");
    } else if (arguments.length > 3) {
        throw Error("Don't enter more than 3 arguments");
    } else {
        result = getAllCookieList();
        for (var key in result) {
            if (cookieName === key) {
                return result[key];
            }
        }
    }
}

function getAllCookieList() {
    if (arguments.length > 0) {
        throw Error("Don't enter any arguments to this function");
    } else {
        associativeCookie = [];
        var splitCookie = document.cookie.split(";");
        for (i = 0; i < splitCookie.length; i++) {
            associativeCookie[splitCookie[i].split("=")[0].trim()] = splitCookie[
                i
            ].split("=")[1];
        }
        return associativeCookie;
    }
}

function deleteCookie() {
    for (i in associativeCookie) {
        document.cookie = i + "=;expires = Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function hasCookie(cookieName) {
    var cookies = allCookieList();
    for (var key in cookies) {
        if (cookieName === key) {
            return true;
        }
    }
    return false;
}

function displayGreeting() {
    var count = getCookie("visitCount");
    count++;
    setCookie("visitCount", count, date.getDate());
    var gender = getCookie("genderCookie");
    var name = getCookie("usernameCookie");
    var color = getCookie("colorCookie");
    gender === "male" ?
        (document.getElementById("genderImg").src = "1.jpg") :
        (document.getElementById("genderImg").src = "2.jpg");
    document.getElementById(
        "infoDiv"
    ).innerHTML = `<span style='font:20px bold'>Welcome,</span><span style='color:${color}'> ${name}</span> you have visited this site <span style='color:${color}'> ${count}</span>${count === 1 ? " time" : " times"
        }:)`;
}