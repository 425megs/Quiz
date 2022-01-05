// Start and Answer Buttons
var startButton = document.querySelector(".start-btn")
var questionContainerEl = document.querySelector("#question-container")
var questionElement = document.querySelector("#question")
var answerButtonsElement = document.querySelector("#answer-buttons")
var answer1 = document.querySelector("#a")
var answer2 = document.querySelector("#b")
var answer3 = document.querySelector("#c")
var checkbox = document.querySelector(".checkbox")
var checkText = document.querySelector(".check")

// Score and question default counts
var score = 0;
var increment = 0;

// Timer variables
var secondsLeft = 50;
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("#main");

//Questions and Answers
var questions = [
    {
        question: "1. The ______ is cold today.",
        choices: ["weather", "whether", "wheather"],
        correct: "weather"
    },

    {
        question: "2. I have had ____ much Thai food today.",
        choices: ["to","too","two"],
        correct: "too"
    },

    {
        question: "3. I am meeting my friend at ______ house.",
        choices: ["their", "there","they're"],
        correct: "their"
    },

    {
        question: "4. _____ place or mine?",
        choices: ["you're","yours", "your"],
        correct: "your"
    },

    {
        question: "5. Do you know ______ way to go?",
        choices: ["witch","which","wich"],
        correct: "which"
    }
];

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "timer: " + secondsLeft;

        if (secondsLeft <= 0 || increment === questions.length-1) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }
//set up reading for next question
        else {
            setNextQuestion();
        } 
    }, 1000);
}

// Function to direct me to the highscores board
function sendMessage() {
    timeEl.textContent = " ";
    var divEl = document.createElement("div");
    divEl.setAttribute("src", "https://425megs.github.io/Quiz/board.html");
    mainEl.append(divEl);
}

function compareAnswer(correct) {
    checkText.style.display = "block" 
    checkbox.style.display="block"
    if (questions[increment].correct === questions[increment].choices[correct]) {
        checkText.textContent = "Correct!"
    } else {
        checkText.textContent = "Wrong :("
        secondsLeft -=10;
    }  
    increment++;   
    if (increment < questions.length) {
        setNextQuestion();
    // } else {
    //     direct to https://425megs.github.io/Quiz/board.html"
    // }
    }
}



function option1() {
    compareAnswer(0)
}
function option2() {
    compareAnswer(1)
}
function option3() {
    compareAnswer(2)
}
answer1.addEventListener("click", option1)
answer2.addEventListener("click", option2)
answer3.addEventListener("click", option3)
// console.log(answer1) reading but not moving on
function setNextQuestion() {
    questionElement.textContent = questions[increment].question
    answer1.textContent = questions[increment].choices[0]
    answer2.textContent = questions[increment].choices[1]
    answer3.textContent = questions[increment].choices[2]
}

// Game should be started once start button is clicked
startButton.addEventListener("click", startGame)


function startGame() {
    //need something in here to hide the answer buttons initially, then redisplay once start is pushed and then hide the start button. something about display none..
    setTime();
    setNextQuestion();
}
