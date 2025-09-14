const questions = [
    {
        question: "1- Qual dia que demos nosso 1º beijo?",
        options: {
            a: "Dia 05/04",
            b: "Dia 06/04",
            c: "Dia 04/04"
        },
        correct: "a"
    },
    {
        question: "2- Qual local especifico demos o nosso primeiro beijo?",
        options: {
            a: "Shopping de poços",
            b: "Cinema",
            c: "Dentro do carro"
        },
        correct: "a"
    },
    {
        question: "3- Qual dia eu dei o primeiro peido?",
        options: {
            a: "No shopping",
            b: "No motel",
            c: "Dentro da sala do cinema"
        },
        correct: "b"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizScreen = document.getElementById('quiz-screen');
const messageScreen = document.getElementById('message-screen');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const scoreElement = document.getElementById('score');
const optionButtons = document.querySelectorAll('.option-btn');

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    optionsContainer.querySelector('[data-option="a"]').textContent = `a) ${q.options.a}`;
    optionsContainer.querySelector('[data-option="b"]').textContent = `b) ${q.options.b}`;
    optionsContainer.querySelector('[data-option="c"]').textContent = `c) ${q.options.c}`;
}

function checkAnswer(selectedOption) {
    const q = questions[currentQuestionIndex];
    if (selectedOption === q.correct) {
        score++;
    } else {
        score = 0; 
        currentQuestionIndex = 0; 
    }
    scoreElement.textContent = `Acertos: ${score}`;
    
    if (score === questions.length) {
        showSuccessScreen();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            
            currentQuestionIndex = 0;
            loadQuestion();
        }
    }
}

function showSuccessScreen() {
    quizScreen.classList.add('hidden');
    messageScreen.classList.remove('hidden');
    void messageScreen.offsetWidth; 
    messageScreen.style.opacity = '1';
}

optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        checkAnswer(button.dataset.option);
    });
});

// Inicializa o quiz
loadQuestion();