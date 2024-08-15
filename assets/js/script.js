

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



start.addEventListener('click', quizDisplay)

function quizDisplay() {
    start.classList.add('hid')
    quizQ.classList.remove('hid')
    displayNextQuestion()
}



