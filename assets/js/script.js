

const start = document.getElementById('strt');

const quizQ = document.getElementById('quiz-q');

start.addEventListener('click', quizDisplay)

function quizDisplay() {
    start.classList.add('hid')
    quizQ.classList.remove('hid')
}