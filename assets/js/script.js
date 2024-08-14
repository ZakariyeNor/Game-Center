

const start = document.getElementById('strt');

const quizQ = document.getElementById('quiz-q');

const question = document.getElementById('que');
const answer = document.getElementById('ans');

let questionPosition = 0;
let randomQuestions

start.addEventListener('click', quizDisplay)

function quizDisplay() {
    start.classList.add('hid')
    randomQuestions = myQuestions.sort(() => Math.random() - .5);
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
    },
    {
        questionJ: 'What is the capital of France?',
        answerJ: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false },
        ]
    },
    {
        questionJ: 'What is the tallest mountain in the world?',
        answerJ: [
            { text: 'K2', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Kangchenjunga', correct: false },
            { text: 'Lhotse', correct: false },
        ]
    },
    {
        questionJ: 'What is the largest planet in our solar system?',
        answerJ: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false },
        ]
    },
    {
        questionJ: 'Who wrote the play "Romeo and Juliet"?',
        answerJ: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false },
        ]
    },
    {
        questionJ: 'What is the smallest country in the world?',
        answerJ: [
            { text: 'Monaco', correct: false },
            { text: 'Vatican City', correct: true },
            { text: 'San Marino', correct: false },
            { text: 'Liechtenstein', correct: false },
        ]
    },
    {
        questionJ: 'What is the largest ocean on Earth?',
        answerJ: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true },
        ]
    },
    {
        questionJ: 'What is the hardest natural substance?',
        answerJ: [
            { text: 'Gold', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Iron', correct: false },
            { text: 'Platinum', correct: false },
        ]
    },
    {
        questionJ: 'Who is known as the father of computers?',
        answerJ: [
            { text: 'Bill Gates', correct: false },
            { text: 'Steve Jobs', correct: false },
            { text: 'Charles Babbage', correct: true },
            { text: 'Alan Turing', correct: false },
        ]
    },
    {
        questionJ: 'Which planet is known as the Red Planet?',
        answerJ: [
            { text: 'Venus', correct: false },
            { text: 'Saturn', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Mercury', correct: false },
        ]
    },
    {
        questionJ: 'Who discovered penicillin?',
        answerJ: [
            { text: 'Marie Curie', correct: false },
            { text: 'Alexander Fleming', correct: true },
            { text: 'Isaac Newton', correct: false },
            { text: 'Albert Einstein', correct: false },
        ]
    },
    {
        questionJ: 'What is the largest desert in the world?',
        answerJ: [
            { text: 'Sahara', correct: true },
            { text: 'Arabian', correct: false },
            { text: 'Gobi', correct: false },
            { text: 'Kalahari', correct: false },
        ]
    },
    {
        questionJ: 'Who was the first person to walk on the Moon?',
        answerJ: [
            { text: 'Buzz Aldrin', correct: false },
            { text: 'Yuri Gagarin', correct: false },
            { text: 'Neil Armstrong', correct: true },
            { text: 'Michael Collins', correct: false },
        ]
    },
    {
        questionJ: 'What is the chemical symbol for water?',
        answerJ: [
            { text: 'HO', correct: false },
            { text: 'H2O', correct: true },
            { text: 'O2H', correct: false },
            { text: 'OH2', correct: false },
        ]
    },
    {
        questionJ: 'Who wrote the novel "1984"?',
        answerJ: [
            { text: 'George Orwell', correct: true },
            { text: 'Aldous Huxley', correct: false },
            { text: 'Ray Bradbury', correct: false },
            { text: 'Jules Verne', correct: false },
        ]
    }
];


function displayNextQuestion() {
    showQuestion(randomQuestions[questionPosition])
}

function showQuestion(questionJ) {
    question.innerText = questionJ.questionJ
}

