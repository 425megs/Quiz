// Start and Answer Buttons
var startButton = document.querySelector(".start-btn")
var questionContainerEl = document.querySelector("#question-container")
var questionElement = document.querySelector("#question")
var answerButtonsElement = document.querySelector("#answer-buttons")
var answer1 = document.querySelector("#a")
var answer2 = document.querySelector("#b")
var answer3 = document.querySelector("#c")


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
        choiceA: "weather",
        choiceB: "whether",
        choiceC: "wheather",
        correct: "a"
    },

    {
        question: "2. I have had ____ much Thai food today.",
        choiceA: "to",
        choiceB: "too",
        choiceC: "two",
        correct: "b"
    },

    {
        question: "3. I am meeting my friend at ______ house.",
        choiceA: "their",
        choiceB: "there",
        choiceC: "they're",
        correct: "a"
    },

    {
        question: "4. _____ place or mine?",
        choiceA: "you're",
        choiceB: "yours",
        choiceC: "your",
        correct: "c"
    },

    {
        question: "5. Do you know ______ way to go?",
        choiceA: "witch",
        choiceB: "which",
        choiceC: "wich",
        correct: "b"
    }
];

//why doesn't this timer function work??
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
            //might need to move around to make sure comparisons in 117+ are comparing the answer for the right questions
            increment++;
            setNextQuestion();
        } 
    }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
    timeEl.textContent = " ";
    var divEl = document.createElement("div");
    divEl.setAttribute("src", "./board.html");
    mainEl.append(divEl);
}

function compareAnswer(event) {
    event.preventDefault();
    event.target.id === questions[increment].correct
    //need to display if correct / wrong and then adjust timer accordingly
}

function setNextQuestion() {
    questionElement.textContent = questions[increment].question
    answer1.textContent = questions[increment].choiceA
    answer2.textContent = questions[increment].choiceB
    answer3.textContent = questions[increment].choiceC
}

function showQuestion(question) {
    questionElement.textContent = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.textContent = answer.textbutton.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


// Game should be started once start button is clicked
startButton.addEventListener("click", startGame)
answer1.addEventListener("click", compareAnswer)
answer2.addEventListener("click", compareAnswer)
answer3.addEventListener("click", compareAnswer)

function startGame() {
    //need something in here to hide the answer buttons initially, then redisplay once start is pushed and then hide the start button. 
    setTime();
    setNextQuestion();
}
