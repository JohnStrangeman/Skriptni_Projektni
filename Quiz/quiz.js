function score(){
    var i = window.prompt("Unesite ime: ");
    var s = document.getElementById("score");

    s.innerHTML= i + " your quiz score is " + sc +"/5";
}
var sc=0;

function submitQ1(){
    var q = document.getElementsByName("Question1");

    if(q.value==4){
        window.alert("Correct answer");
        sc++;
    }
    else{
        window.alert("Wrong answer");
    }
}