

const start = document.getElementById('strt');

const quizQ = document.getElementById('quiz-q');

document.addEventListener('DOMContentLoaded', function() {
    const answerChoices = document.querySelectorAll('.answer .opt');
    const correctAnswerIndex = 2;

    answerChoices.forEach((choice, index) => {
        choice.addEventListener('click', function() {
            if(index === correctAnswerIndex) {
                choice.classList.add('correct');
            } else {
                choice.classList.add('incorrect');
            }
        });
    });
});

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



