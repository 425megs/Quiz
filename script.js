const startButton = document.querySelector(".start-btn")
const questionContainerEl = document.querySelector("#question-container")
let shuffledQuestions, currentQuestionIndex
const questionElement = document.querySelector("#question")
const answerButtonsElement = document.querySelector("#answer-buttons")

startButton.addEventListener("click", startGame)

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.textbutton.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {

}

function selectAnswer() {

}

const questions = [
    {question: "1. The _____ is cold today.",
    answers: [
        {text: "weather", correct: true},
        {text: "whether", correct: false},
        {text: "wheater", correct: false}
    ]}
]