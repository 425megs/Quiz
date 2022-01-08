var currentHighScores = [] 
var scoreTable = document.querySelector("#table")


function renderScores(){
    currentHighScores.sort(function(a,b) {
        return b[1] - a[1];
    })

    for (var i = 0; i < currentHighScores.length; i++) {
        var score = currentHighScores[i];
        var tdInitial = document.createElement("td");
        var tdScore = document.createElement("td");
        var tr = document.createElement("tr");
        tdInitial.textContent = score[0];
        tdScore.textContent = score[1];
        tr.appendChild(tdInitial);
        tr.appendChild(tdScore);
        scoreTable.appendChild(tr);
    }
}

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

function clearBoard() {
    localStorage.removeItem("newScore");
    localStorage.clear;
}
    
initialize();