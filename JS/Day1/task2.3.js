function phoneChecking(phone){
    if (isNaN(phone)||phone.length !== 7 || phone == null || phone ==""){
        var phone = prompt("Please enter your phone again:");
    }
}

function mobileChecking(mobile){
    if (isNaN(mobile)||mobile.length !== 11 || mobile == null || mobile ==""){
        var phone = prompt("Please enter your mobile again:");
    }
}

function nameChecking(name){
    if(name== null || name== ""){
        var name = prompt("Please enter your name again:");
    }
}

function emailChecking(email){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat)){
        return true;
    }else{
        alert("You have entered an invalid email address!");
        var email = prompt("Please enter your email again:");
        return false;
        }
}

var name = prompt("Enter your name:");
nameChecking(name);
var phone = prompt("Enter your phone:");
phoneChecking(phone);
var mobile = prompt("Enter your mobile:");
mobileChecking(mobile);
var email = prompt("Enter your email:");
emailChecking(email);
var date= new Date();
var choosenColor;
var welcomeMessage = "Welcome dear guest";
var telephoneMessage = "Your telephone number is";
var mobileMessage= "Your mobile number is";
var emailMessage= "Your email address is";
var dateMessage= "Today is";
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var colorIndex = prompt("Choose a color: \n 1-Red\n 2-Green\n 3-Blue");

switch (colorIndex){
    case "1":
        choosenColor = 'red';
        break;
    case "2":
        choosenColor = 'green';
        break;
    case "3":
        choosenColor = 'blue';
        break;
}

document.write("<h3>" + welcomeMessage.fontcolor(choosenColor)+ " " + name + "</h3>");
document.write("<h3>" + telephoneMessage.fontcolor(choosenColor)+ " " +phone + "</h3>");
document.write("<h3>" + mobileMessage.fontcolor(choosenColor)+ " " + mobile + "</h3>");
document.write("<h3>" + emailMessage.fontcolor(choosenColor)+ " " + email +"</h3>");
document.write("<h3>" + dateMessage.fontcolor(choosenColor)+ " " + days[date.getDay()] +" "+ months[date.getMonth()]+" "+ date.getDate() +" "+ date.getFullYear() + "</h3>");
