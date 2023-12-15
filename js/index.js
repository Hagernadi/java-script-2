

function randomText(){
var userNames=["-- Andre Gide","--Stephen Chbosky","--Frank Sinatra","--Friedrich Nietzsche"];
var userText=["It is better to be hated for what you are than to be loved for what you are not.",
"We accept the love we think we deserve.","The best revenge is massive success.","Without music, life would be a mistake"];

for(var i=0;i<userNames.length;i++){
    var num=Math.floor(Math.random()*i);
    document.getElementById("demo").innerHTML=userText[num];
    document.getElementById("deme").innerHTML=userNames[num];
   
}
 
}
randomText()











