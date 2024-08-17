
document.addEventListener('DOMContentLoaded', function() {
    const start = document.getElementById('strt');
    const quizQ = document.getElementById('quiz-q');    
    let restart = document.getElementById('resta');
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

        if (indx === document.querySelectorAll('.quiz-area').length - 1) {
            document.querySelectorAll('.next').forEach(button => button.classList.add('hid'));
            restart.classList.remove('hid');
        } else {
            document.querySelectorAll('.next').forEach(button => button.classList.remove('hid'));
            restart.classList.add('hid');
            start.classList.add('hid');
        }
    
    }



    document.querySelectorAll('.next').forEach((button) => {
        button.addEventListener('click', function() {
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
    restart.classList.add('hid');
    }

    restart.addEventListener('click', function() {
        currentQuestionIndex = 0;
        resetQuiz();
    });
    function resetQuiz() {
        document.querySelectorAll('.quiz-area').forEach((quiz) => {
            quiz.classList.add('hid');
            const answerChoices = quiz.querySelectorAll('.answer .opt');
            answerChoices.forEach((choice) => {
                choice.classList.remove('correct', 'incorrect');
                choice.removeAttribute('disabled');
            });
        });
        start.classList.remove('hid');
        quizQ.classList.add('hid');
        restart.classList.add('hid');
    }

    

});
