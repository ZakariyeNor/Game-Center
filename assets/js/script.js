/* JavaScript esversion: 6 */
{
    "esversion"; 6
  }

// Wait for the DOM to load before executing the script 
document.addEventListener('DOMContentLoaded', function() {

    // Get the start button, quiz area and restart button by their IDs 
    const start = document.getElementById('strt');
    const quizQ = document.getElementById('quiz-q');    
    let restart = document.getElementById('resta');

    // declare correct, incorrect and currentQuestionIndex
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    // Click event listener to the start button to display the quiz 
    start.addEventListener('click', quizDisplay);

 // Function to start the quiz by hiding the start button and showing the first question 
    function quizDisplay() {
        start.classList.add('hid')
        quizQ.classList.remove('hid')
        showQuestion(currentQuestionIndex);
    }

//  Function to show the question at the given index 
function showQuestion(currentQuestionIndex) {

    /* Iterate over all quiz areas (questions) and show the current question */
    document.querySelectorAll('.quiz-area').forEach((quiz, inx) => {
        quiz.classList.add('hid');

        if (inx === currentQuestionIndex) {
            quiz.classList.remove('hid');

            const answerChoices = quiz.querySelectorAll('.answer .opt');
            const correctAnswerIndex = Array.from(answerChoices).findIndex(choice => choice.getAttribute('data-correct') === 'true');
            const nextButton = quiz.querySelector('.next');
            let answerSelected = false;
            let hasAnswered = false;

            // Disable the next button initially
            nextButton.setAttribute('disabled', true);

            answerChoices.forEach((choice, index) => {
                const newChoice = choice.cloneNode(true);
                choice.replaceWith(newChoice);

                /* Add a click event listener to each answer choice */
                newChoice.addEventListener('click', function () {
                    if (!hasAnswered) {
                        hasAnswered = true;  // Mark the question as answered
                        answerSelected = true;

                        // Enable the Next button after selecting an answer
                        nextButton.removeAttribute('disabled');

                        // Disable all other answers after one is clicked
                        answerChoices.forEach(btn => btn.setAttribute('disabled', true));

                        /* Check if the selected answer is correct */
                        if (index === correctAnswerIndex) {
                            newChoice.classList.add('correct');
                            correctAnswers++; // Increment the correct answers count
                        } else {
                            newChoice.classList.add('incorrect');
                            incorrectAnswers++; // Increment the incorrect answers count
                        }

                        /* Show alert message for correct or incorrect */
                        const alertMessage = document.getElementById('alert-message');
                        if (index === correctAnswerIndex) {
                            alertMessage.textContent = 'Correct! Great job!';
                            alertMessage.classList.remove('incorrect');
                            alertMessage.classList.add('correct');
                        } else {
                            alertMessage.textContent = 'Incorrect! Try again.';
                            alertMessage.classList.remove('correct');
                            alertMessage.classList.add('incorrect');
                        }

                        alertMessage.style.display = 'block';
                        alertMessage.style.opacity = 1;
                        alertMessage.style.top = '20px';  // Pop up

                        // Hide the alert after a short delay
                        setTimeout(() => {
                            alertMessage.style.opacity = 0;
                            alertMessage.style.top = '-50px'; // Slide out
                            setTimeout(() => alertMessage.style.display = 'none', 500); // Hide it after animation
                        }, 2000); 

                        /* Check if the current question is the last one, end the quiz if it is the last one and show the restart button */
                        if (currentQuestionIndex === document.querySelectorAll('.quiz-area').length - 1) {
                            endTheQuiz();
                            restart.classList.remove('hid');
                        }
                    }
                });
            });

            // Prevent next button click if no answer is selected
            nextButton.addEventListener('click', function (event) {
                if (!answerSelected) {
                    event.preventDefault();
                } else {
                    // Reset flags for the next question
                    hasAnswered = false;
                    answerSelected = false;
                    // Move to the next question
                    currentQuestionIndex++;
                    showQuestion(currentQuestionIndex);
                }
            });
        }
    });

    /* If it's the last question, hide 'next' buttons and show restart button, otherwise, show 'next' buttons and hide restart button */
    if (currentQuestionIndex === document.querySelectorAll('.quiz-area').length - 1) {
        document.querySelectorAll('.next').forEach(button => button.classList.add('hid'));
        restart.classList.remove('hid');
    } else {
        document.querySelectorAll('.next').forEach(button => button.classList.remove('hid'));
        restart.classList.add('hid'); // hide restart button until the last question
        start.classList.add('hid');
    }

}



// Add click event listeners to all 'next' buttons to go to the next question
    document.querySelectorAll('.next').forEach((button) => {
        button.addEventListener('click', function() {
// If there are more questions, increment the index and show the next question
        if (currentQuestionIndex < document.querySelectorAll('.quiz-area').length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            endTheQuiz()

        }
    });

});

// Function to handle the end of the quiz
function endTheQuiz() {
    let totalQuestions = document.querySelectorAll('.quiz-area').length;
    let resultMessage;


/* Determine the result message, display alert message and hide the quiz area and restart button after the quiz ends */
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
/* click event for the restart button to reset and restart the quiz, reset the current question index 0 and call the function to the reset the quiz */
    restart.addEventListener('click', function() {
        currentQuestionIndex = 0;
        
        correctAnswers = 0;
        incorrectAnswers = 0;
        console.log('correct', correctAnswers)
        console.log('incorrect', incorrectAnswers)
        resetQuiz();
        showQuestion(currentQuestionIndex);
    });


/* Function to reset the quiz for new attempt, 
hide all questions and reset answer choices, remove correct, incorrect classes and enable the answer choice buttons */
    function resetQuiz() {
        document.querySelectorAll('.quiz-area').forEach((quiz) => {
            quiz.classList.add('hid');
            const answerChoices = quiz.querySelectorAll('.answer .opt');
            answerChoices.forEach((choice) => {
                choice.classList.remove('correct', 'incorrect');
                choice.removeAttribute('disabled');
            });
        });

/* Show start button again, hide the quiz area and hide the restart button */
        start.classList.remove('hid');
        quizQ.classList.add('hid');
        restart.classList.add('hid');
    }
});

