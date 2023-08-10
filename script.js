let logo = document.getElementById("sun-safe")
let nav = document.querySelector("nav")
let home_description = document.getElementById("home_description")
let home_button = document.getElementById("actual-home-button")
let cancer_types_description = document.getElementById("cancer_types_description")
let home = document.getElementById("home")
let cancer_types = document.getElementById("cancer-types")
let cancer_types_button = document.getElementById("cancer_types_button")
let melanoma_description = document.getElementById("melanoma-description")
let basal_description = document.getElementById("basal-cell-carcinoma-description")
let merkel_description = document.getElementById("merkel-cell-carcinoma-description")
let quiz_button = document.getElementById("quiz_button")

cancer_types.style.display = "none"

var funky_boi = new Audio('audio/funky_yokai.mp3')
funky_boi.loop = true

funky_boi.play()

function toggleMelanomaDescription() {
    if (melanoma_description.style.display == "block") {
        melanoma_description.style.display = "none"
    }
    else {
    melanoma_description.style.display = "block"
    }
}

function toggleBasalDescription() {
    if (basal_description.style.display == "block") {
        basal_description.style.display = "none"
    }
    else {
    basal_description.style.display = "block"
    }
}

function toggleMerkelDescription() {
    if (merkel_description.style.display == "block") {
        merkel_description.style.display = "none"
    }
    else {
    merkel_description.style.display = "block"
    }
}



home_button.onclick = function() {
    cancer_types.style.display = "none"
    home.style.display = "flex"
}

cancer_types_button.onclick = function() {
    home.style.display = "none"
    cancer_types.style.display = "inline"
}


quiz_button.onclick = function() {
    window.location = "quiz/quiz-index.html"
}

logo.onclick = function() {
    window.location='http://www.google.com';

}