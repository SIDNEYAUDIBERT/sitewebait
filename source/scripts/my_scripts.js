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
    alert("Appuyé")
}

function myFunction() {
    console.log('COUCOU');
}