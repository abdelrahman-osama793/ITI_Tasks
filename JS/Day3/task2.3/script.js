var usernameVal = document.getElementById("username");
var passwordVal = document.getElementById("password");

function checkSubmit(event){
    var respond = confirm("Do you want to submit?");
    if(!respond) event.preventDefault();
}

window.document.addEventListener("checkInteraction", ()=>{
    alert('please Enter values');
});

setTimeout(() => {
   window.document.dispatchEvent(new CustomEvent("checkInteraction")) 
}, 30000);