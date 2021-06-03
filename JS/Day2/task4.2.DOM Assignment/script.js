document.getElementById("header").style.textAlign = "right";
document.getElementById("nav").style.listStyle = "circle";
var originalDiv = document.getElementById("header");
var clonedDiv=originalDiv.cloneNode(true);
document.body.appendChild(clonedDiv);
document.body.lastChild.style.textAlign = "left";