
document.addEventListener('DOMContentLoaded', function() {
    const start = document.getElementById('strt');
    const quizQ = document.getElementById('quiz-q');    
    const answerChoices = document.querySelectorAll('.answer .opt');
    const correctAnswerIndex = 2;

    start.addEventListener('click', quizDisplay);

    function quizDisplay() {
        start.classList.add('hid')
        quizQ.classList.remove('hid')
        displayNextQuestion()
    }

    answerChoices.forEach((choice, index) => {
        choice.addEventListener('click', function() {

            answerChoices.forEach(btn => btn.setAttribute('disabled', true));

            if(index === correctAnswerIndex) {
                choice.classList.add('correct');
            } else {
                choice.classList.add('incorrect');
            }
        });
    });
});



