// Select elements
let button = document.querySelector("button")
let leaderboard = document.getElementById("leaderboard")
let input = document.querySelectorAll("input")
let form = document.querySelector("form")
let title = document.querySelector("title")

// Add event
button.addEventListener("click", sendResults)

// const app = firebase.initializeApp(firebaseConfig);


function sendResults(event){
    event.preventDefault()
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

        // scoring logic
        let score = 0
        let correctanswers = ["", "pizza", "exercise", "crazy"]
        for (x = 1; x<input.length; x++) {
            if (input[x].value.toLowerCase() == correctanswers[x]) {
                score = score + 1
            }
        }
    // // defining data variables
    // let name = input[0].value
    // let finalscore = score
    
    // // Create db instance
    // let db = app.firestore();
    // console.log(db)
    
    // // Create data
    // const QuizResult = {
    //   name: name,
    //   score: finalscore
    // }
    
    // // send data
    // db.collection("leaderboard").add(newQuizResult)
    // .then(function(data){
    //   console.log("Data sent")
    // })

    form.style.display = "none"
    leaderboard.style.display = "inline"
    leaderboard.innerHTML = "Last night I ate a " + input[1].value +" and today I just had to "+input[2].value+ ". What a "+input[3].value+" day!"+"Score: " + score + " out of " + (input.length-1)
}
}




onkeyup = function() {
    title.innerText = input[0].value + "'s Sun Safe Quiz"
}
