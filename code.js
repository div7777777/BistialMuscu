// changeur de thème
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
// menu
function myFunctions() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // réseaux sociaux
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  // barre de recherche
  function search_icones(){
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase();
    let x = document.getElementsByClassName('icone');
    for (i=0; i<x.length; i++){
        if (!x[i].innerHTML.toLocaleLowerCase().includes(input)){
            x[i].style.display="none";
        }
        else{
            x[i].style.display="list-item";
        }
    }
}
