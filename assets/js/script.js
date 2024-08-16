
document.addEventListener('DOMContentLoaded', function() {
    const start = document.getElementById('strt');
    const quizQ = document.getElementById('quiz-q');    
    
    let currentQuestionIndex = 0;

    start.addEventListener('click', quizDisplay);

    function quizDisplay() {
        start.classList.add('hid')
        quizQ.classList.remove('hid')
        showQuestion(currentQuestionIndex);
    }

    function showQuestion(indx) {
        document.querySelectorAll('.quiz-area').forEach((quiz, inx) => {
            quiz.classList.add('hid');
            if(inx === indx) {
                quiz.classList.remove('hid');
                const answerChoices = quiz.querySelectorAll('.answer .opt');
                const correctAnswerIndex = Array.from(answerChoices).findIndex(choice => choice.getAttribute('data-correct') === 'true');
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
            }
        });
    
    }



    document.querySelectorAll('.next').forEach((button) => {
        if (currentQuestionIndex < document.querySelectorAll('.quiz-area').length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            endTheQuiz()

        }
    });

});

function endTheQuiz() {
    alert('End Of Quiz');
    quizQ.classList.add('hid');
    
}