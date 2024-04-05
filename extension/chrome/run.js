let calcbutton = document.getElementById("calculate");

calcbutton.onclick = (function(i) {return function() {
    Calculatetax()
};})();

function Calculatetax() {
let Amount = document.getElementById("amountnumber").value;
let ConvertedAmount =  Math.floor(Amount * (10/7) + 1)
document.getElementById('output').innerHTML = ConvertedAmount + "R$";
}
