// Select elements
let button = document.querySelector("button")
let story = document.getElementById("story_result")
let input = document.querySelectorAll("input")
let form = document.querySelector("form")
let title = document.querySelector("title")

// Add event
button.addEventListener("click", grabInput)

// Function
function grabInput(event){
    let noblanks = true
    for (let a = 0; a<4; a++) {
        if (input[a].value == "") {
            noblanks = false
        }
    }
    if (noblanks == false) {
        alert("fill all fields")
    }
    else {
 

    event.preventDefault()  // Prevent the page from reload and doing defaults

    // Display 
    form.style.display = "none"
    story.style.display = "inline"
    title.innerText = input[0].value
    story.innerHTML = "Last night I ate a " + input[1].value +" and today I just had to "+input[2].value+ ". What a "+input[3].value+" day!"
    }

}


onkeydown = function() {
    title.innerText = input[0].value
}
