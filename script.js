let logo = document.getElementById("sun-safe")
let nav = document.querySelector("nav")
let home_description = document.getElementById("home_description")
let home_button = document.getElementById("actual-home-button")
let cancer_types_description = document.getElementById("cancer_types_description")
let home = document.getElementById("home")
let cancer_types = document.getElementById("cancer-types")
let cancer_types_button = document.getElementById("cancer_types_button")


var funky_boi = new Audio('funky_yokai.mp3')

funky_boi.play()


function cancer_types_href() {
    home.style.display = "none"
}

cancer_types_button.onclick = function() {
    home.style.display = "none"
}


home_button.onclick = function() {
    cancer_types.style.display = "none"
}


logo.onclick = function() {
    window.location='http://www.google.com';

}




