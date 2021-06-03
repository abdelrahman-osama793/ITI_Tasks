function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

var params = getSearchParameters();

function addText(){
    document.getElementById("name").innerHTML = "Welcome " + params["name"].replace(/[+]/g, " ");
    document.getElementById("title").innerHTML = params["job-title"].replace(/[+]/g, " ");
    showInfo();
}

function showInfo(){
    setTimeout(()=>{
        document.getElementById("info").innerHTML = "your info is";
        document.getElementById("address").innerHTML = params["address"].replace(/[+]/g, " ").replace(/\%2C/g,",");
        document.getElementById("gender").innerHTML = params["gender"].replace(/[+]/g, " ");
        document.getElementById("email").innerHTML = params["email"].replace(/\%40/g, "@");
        document.getElementById("mobile").innerHTML = params["telephone"].replace(/[+]/g, " ");     
    }, 2000);
}

addText()

