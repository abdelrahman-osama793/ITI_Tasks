function repeatMessage(string){
    for (i= 1; i<=6; i++){
        document.write("<h" +i+ ">" +input + " " + i +"</h"+i+">");
    }    
}
var input= prompt("enter a message:");
repeatMessage(input);