// Getting Firebase in the first place
const firebaseConfig = {
    apiKey: "AIzaSyBADBJkkJbZx9akXv_DyWevltm_8NULvEA",
    authDomain: "sun-safe-shore-leaderboard.firebaseapp.com",
    projectId: "sun-safe-shore-leaderboard",
    storageBucket: "sun-safe-shore-leaderboard.appspot.com",
    messagingSenderId: "848523464041",
    appId: "1:848523464041:web:519e3ac19c88f77b7dc1f8",
    measurementId: "G-0FJP8PB88X"
  };
  const app = firebase.initializeApp(firebaseConfig);



function sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


// Select elements
let button = document.querySelector("button")
let leaderboard = document.getElementById("leaderboard")
let input = document.querySelectorAll("input")
let form = document.querySelector("form")
let title = document.querySelector("title")

// Add event
button.addEventListener("click", sendResults)



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
    // defining data variables
    let name = input[0].value
    let finalscore = score
    
    // Create db instance
    let db = app.firestore();
    console.log(db)
    
     // Create data
     const newAttempt = {
       name: name,
       score: finalscore,
     };
    
    // send data
    db.collection("leaderboard").add(newAttempt)
    .then(function(data){
      console.log("Data sent")
    })

    form.style.display = "none"
    leaderboard.style.display = "inline"
    leaderboard.innerHTML = "Last night I ate a " + input[1].value +" and today I just had to "+input[2].value+ ". What a "+input[3].value+" day!"+"Score: " + score + " out of " + (input.length-1)

    db = firebase.firestore();
    db = db.collection("leaderboard")
    db = db.orderBy("score", "desc")
    const ScoreCollection = db;

    let querySnapshot = ScoreCollection.get()
.then(function(querySnapshot) {
    querySnapshot.docs = sortByKey(querySnapshot.docs, "score")
  for (let i = 0; i < querySnapshot.docs.length; i++) {
    const submission = querySnapshot.docs[i];

    let challenger = document.createElement("ol")
    challenger.innerHTML = submission.data().name + " Score : " + submission.data().score
    leaderboard.appendChild(challenger) 
  }

})
.catch(function(error) {
  console.error("Error getting documents: ", error);
});
}
}

onkeyup = function() {
    title.innerText = input[0].value + "'s Sun Safe Quiz"
}
