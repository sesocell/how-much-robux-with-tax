let ourgoofy = document.getElementById("goofy");

ourgoofy.onclick = (function(i) {return function() {
    myFunc()
};})();

function myFunc() {
let sesocell= document.getElementById("baysesocell").value;
let save =  Math.floor(sesocell * (10/7) + 1)
document.getElementById('output').innerHTML = save + "R$";
}