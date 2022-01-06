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
var initialsInput = document.querySelector("#initials")
var scoreBoard = document.querySelector("#saveScore")

// Score and question default counts
var score = 0;
var increment = 0;

// Timer variables
var secondsLeft = 50;
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("#main");
var timerInterval;

//Questions and Answers Array
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
    },
];

// Timer
function setTime() {
    document.querySelector("#question-container").style.display = "block"
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft <= 0) {
            // Stops timer
            clearInterval(timerInterval);
            // Calls function to generate highscore board
            gameOver();
        }
    }, 1000);
}

// Function to direct me to enter my initials and score of secondsLeft
function gameOver(){
    // Louis said not to declare as global variables -\('_')/-
    clearInterval(timerInterval);
    document.querySelector("#question-container").remove();
    document.querySelector("#start-btn").remove();
    document.querySelector("#endMessage").textContent = "Your score is " + secondsLeft;
    document.querySelector(".form").style.display = "block"
    console.log("hi")
};

function submitButton(event){
console.log("submitButton")
  event.preventDefault();
  var initials = (initialsInput.value);
  var newScore = [initials, secondsLeft];
  console.log(newScore)
  localStorage.setItem("newScore", JSON.stringify(newScore));
  window.location.href = "https://425megs.github.io/Quiz/board.html"
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
    } else {
        gameOver();
    }
}

// Functions triggered by event listeners to check if answer selected is correct/incorrect
function option1() {
    compareAnswer(0)
}
function option2() {
    compareAnswer(1)
}
function option3() {
    compareAnswer(2)
}

// Event listeners for each answer choice
answer1.addEventListener("click", option1)
answer2.addEventListener("click", option2)
answer3.addEventListener("click", option3)

// Function moving us to the next question in Array
function setNextQuestion() {
    questionElement.textContent = questions[increment].question
    answer1.textContent = questions[increment].choices[0]
    answer2.textContent = questions[increment].choices[1]
    answer3.textContent = questions[increment].choices[2]
}

// Starts game when Start button is clicked
startButton.addEventListener("click", startGame)

// Function to start the timer and move us to the first question.
function startGame() {
    document.querySelector("#start-btn").style.display ="none"
    setTime();
    setNextQuestion();
}
