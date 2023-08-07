let logo = document.getElementById("sun-safe")
let nav = document.querySelector("nav")
let home_description = document.getElementById("home_description")
let home_button = document.getElementById("home_button")
let cancer_types_description = document.getElementById("cancer_types_description")

home_button.addEventListener("mouseenter", revealDescription )

function revealDescription() {
    home_description.style.visibility = "visible"
}


var funky_boi = new Audio('funky_yokai.mp3')

funky_boi.play()


function cancer_types_href() {
    window.open("hub_copy.html")
}


function showCancerDescription() {
    cancer_types_description.style.display = "inline"
}


logo.onclick = function() {
    window.location='http://www.google.com';

}




