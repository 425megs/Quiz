var currentHighScores = []
var scoreTable = document.querySelector("#table")

function initialize(){
    console.log("help")
    if (localStorage.getItem("highScores") !==null) {
        currentHighScores=JSON.parse(localStorage.getItem("highScores"));
    }

    var newScore = JSON.parse(localStorage.getItem("newScore"));

    if (newScore !== null) {
        currentHighScores.push(newScore);
    }

    localStorage.setItem("highScores", JSON.stringify(currentHighScores));
    renderScores();
}

function renderScores(){
    currentHighScores.sort(function(a,b) {
        return b[1] - a[1];
    })
// var top3 = {
//     "initials": 
//     "score": 
//     // somehow sorts lowest to highest times
// }
//     puts it in table on html
// }



// function clearButton() {
//     localStorage.clear();
// }

    
    
initialize();