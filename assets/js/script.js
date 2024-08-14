

const start = document.getElementById('strt');

const quizQ = document.getElementById('quiz-q');

let questionPosition = 0;
let randomQuestions

start.addEventListener('click', quizDisplay)

function quizDisplay() {
    start.classList.add('hid')
    randomQuestions = myQuestions.sort(() => Math.floor(Math.random() * 15); )
    questionPosition = 0;
    quizQ.classList.remove('hid')
    displayNextQuestion()
}

const myQuestions = [
    {
        questionJ: 'Who painted the Mona Lisa?',
        answerJ: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Claude Monet', correct: false },

        ]
    }
]

