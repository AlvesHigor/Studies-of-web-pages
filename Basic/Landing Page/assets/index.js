var card_1 = window.document.getElementById("card_1")
var card_2 = window.document.getElementById("card_2")
var card_3 = window.document.getElementById("card_3")
var left = window.document.getElementById("left")
var right = window.document.getElementById("right")

function rollRight(){
    card_1.style = "display:none"
    card_3.style = "display:flex"
    left.style = "display:flex"
    right.style = "display:none"
}

function rollLeft(){
    card_1.style = "display:flex"
    card_3.style = "display:none"
    left.style = "display:none"
    right.style = "display:flex"
}