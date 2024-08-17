/* Wait for the DOM to load before executing the script */
document.addEventListener('DOMContentLoaded', function() {

    /* Get the start button, quiz area and restart button by their IDs */
    const start = document.getElementById('strt');
    const quizQ = document.getElementById('quiz-q');    
    let restart = document.getElementById('resta');

    /* declare correct, incorrect and currentQuestionIndex */
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    /* Click event listener to the start button to display the quiz */
    start.addEventListener('click', quizDisplay);

 /* Function to start the quiz by hiding the start button and showing the first question */
    function quizDisplay() {
        start.classList.add('hid')
        quizQ.classList.remove('hid')
        showQuestion(currentQuestionIndex);
    }

/*  Function to show the question at the given index */
    function showQuestion(currentQuestionIndex) {

        /* Iterate over all quiz areas (questions) and show the current question */
        document.querySelectorAll('.quiz-area').forEach((quiz, inx) => {
            quiz.classList.add('hid');
            if(inx === currentQuestionIndex) {
                quiz.classList.remove('hid');
                const answerChoices = quiz.querySelectorAll('.answer .opt');
                const correctAnswerIndex = Array.from(answerChoices).findIndex(choice => choice.getAttribute('data-correct') === 'true');
                answerChoices.forEach((choice, index) => {

                    /* Add a click event listener to each answer choice */
                    choice.addEventListener('click', function() {

                        /* Disable all answer buttons after one is clicked */
                        answerChoices.forEach(btn => btn.setAttribute('disabled', true));
                        if(index === correctAnswerIndex) {
                            console.log('correct')
                            choice.classList.add('correct');
                            correctAnswers++; // Increment the correct answers count

                        } else {
                            console.log('incorrect')
                            choice.classList.add('incorrect');
                            incorrectAnswers++; // Increment the incorrect answers count
                        }

                        /* Check if the current question is the last one, end the quiz if it is the last one and show the restart button */
                        if (currentQuestionIndex === document.querySelectorAll('.quiz-area').length -1) {
                            endTheQuiz();
                            restart.classList.remove('hid');
                        }
                    });
                 });
            }
        });

        /* If it's the last question, hide 'next' buttons and show restart button, otherwise, show 'next' buttons and hide restart button */
        if (currentQuestionIndex === document.querySelectorAll('.quiz-area').length - 1) {
            document.querySelectorAll('.next').forEach(button => button.classList.add('hid'));
            restart.classList.remove('hid');
        } else {
            document.querySelectorAll('.next').forEach(button => button.classList.remove('hid'));
            restart.classList.add('hid'); // hide restart button until the last question. 
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
    let totalQuestions = document.querySelectorAll('.quiz-area').length;
    let resultMessage;

    if (correctAnswers === totalQuestions) {
        resultMessage = `Congrats! You got all ${correctAnswers} questions correct!`;
    } else if (incorrectAnswers === totalQuestions) {
        resultMessage = `Try again! You got all ${incorrectAnswers} questions wrong.`;
    } else {
        resultMessage = `You got ${correctAnswers} correct and ${incorrectAnswers} wrong out of ${totalQuestions} questions.`;
    }
    alert(resultMessage);

    
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

