var apiLink = "https://reqres.in/api/users";
var getBtn = document.getElementById("getBtn");
var displayTable = document.getElementById("displayTable");
var email, firstName, lastName;
var unparsedData = "";

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('Get', apiLink);
    xhr.send("");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                unparsedData = xhr.responseText;
                var parsedData = JSON.parse(unparsedData);
                for (var key in parsedData.data) {
                    email = parsedData.data[key].email;
                    firstName = parsedData.data[key].first_name;
                    lastName = parsedData.data[key].last_name;
                    displayContent(firstName, lastName, email);
                }
            }
        }
    }
}

function displayContent(fname, lname, email) {
    displayTable.innerHTML += `
    <td>${email}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    `
}

// getBtn.addEventListener('click', getData);