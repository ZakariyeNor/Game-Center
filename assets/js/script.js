

const start = document.getElementById('strt');

const quizQ = document.getElementById('quiz-q');


let questionPosition = 0;

start.addEventListener('click', quizDisplay)

function quizDisplay() {
    start.classList.add('hid')
    questionPosition = 0;
    quizQ.classList.remove('hid')
    displayNextQuestion()
}

function displayNextQuestion() {
    showQuestion([questionPosition])
}

function selectAnswer(e) {

}

