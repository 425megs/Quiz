var currentHighScores = []
var scoreTable = document.querySelector("#table")

function initialize(){
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

    for (var i = 0; i < currentHighScores.length; i++) {
        var score = currentHighScores[i];
        var td = document.createElement("td");
        td.textContent = "  " + score[0];
        score.appendChild(td);
    }
}

function clearBoard() {
    localStorage.removeItem("newScore");
}
    
initialize();