/*
* init 
* called when body loaded
*/

function init() {
    document.getElementById("test").innerHTML = "init says Hi!";
}

function test_button() {
    var my_test_div = document.getElementById("test");
    my_test_div.innerHTML = "Je suis content !";
    my_test_div.style.backgroundColor = "green"
    alert("Clicked");
}

function test() {
    setInterval(myFunction, 1000);
    alert("Appuyé");
}

var my_test_div = document.getElementById("my_crazy_square");
{
    var elem = document.getElementById("animate");
var pos = 0;
var id = setInterval(frame, 5);
  function frame() {
 if (pos == 500) {
    clearInterval(id);}
    
    else 
    {
 pos++;
elem.style.top = pos + 'px';
 elem.style.left = pos + 'px';
  }
}
} 

}




function myFunction() {
    console.log('COUCOU');
}