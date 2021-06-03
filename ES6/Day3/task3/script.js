let apiLink = "https://reqres.in/api/users";

function urlHandler(url) {

    let promise1 = new Promise((success, fail) => {
        let xhr = new XMLHttpRequest();
        xhr.open('Get', url);
        xhr.send("");
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    success(xhr.response);
                } else {
                    fail(error);
                }
            }
        }
    })
    return promise1;
}

urlHandler(apiLink).then((response) => {
    var parsedData = JSON.parse(response);
    // console.log(parsedData)
    displayContent(parsedData.data);
}).catch((e) => {
    throw new Error(e);
});

function displayContent(parsedData) {
    document.getElementById("tableDiv").innerHTML =
        `   
        <table table table class = "table table-striped table-dark table-bordered table-hover " >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody id="tableBody">

            </tbody>
        </table>
    `;

    parsedData.forEach((element) => {
        let rowOfData = document.createElement('tr');
        rowOfData.innerHTML =
            `
            <th scope="row">${element.id}</th>
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>
            <td>${element.email}</td>
        `;
        document.getElementById("tableBody").appendChild(rowOfData);
    });
}