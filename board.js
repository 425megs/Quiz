function initialize(){
    if (localStorage.getItem("highScores") !==null) {
        highScores=JSON.parse(localStorage.getItem("highScores"));
    }

    var newScore = JSON.parse(localStorage.getItem("newScores"));
    if (newScore !== null) {
        highScores.push(newScore);
    }

    localStorage.setItem("highScores", JSON.stringify(highScores));

    renderScores();
}  

function renderScores(){
var top3 = {
    "initials": "localStorage.getItem();
    "score": "localStorage.getItem();
    // somehow sorts lowest to highest times
}
//     puts it in table on html
}



function clearButton() {
    localStorage.clear();
}

    
    
initialize();

