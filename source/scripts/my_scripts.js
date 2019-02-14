/*
* init 
* called when body loaded
*/
var pos = 0;

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
    setInterval(myFunction, 10);
    //alert("Appuyé"); Afficher Appuyé toute les secondes
}

function myFunction() 

{
    indic=1;
    compteur=0;
    var my_square = document.getElementById("my_crazy_square");

while(compteur<3)
  {
    while(indic==1)
    {
        {pos = pos + 1;
         my_square.style.right = pos + 'px';
        if(pos==500){indic=0; compteur++;}
    }

    while(indic==0)
    {
        pos = pos - 1;
         my_square.style.left = pos + 'px';
         if(pos==0){indic=1;} compteur++;)
        }

    }
  }
}