let currentQuestion = 0;
const questions = [
    {
        question: "Qual é 5 + 3?",
        correctAnswer: 8,
        explanation: "5 + 3 é igual a 8."
    },
    {
        question: "Qual é 12 - 4?",
        correctAnswer: 8,
        explanation: "12 - 4 é igual a 8."
    },
    {
        question: "Qual é 6 × 2?",
        correctAnswer: 12,
        explanation: "6 multiplicado por 2 é igual a 12."
    },
   {
        question: "Qual é a fórmula para calcular a área de um triângulo?"
        correctAnswer: c A = (b × h)/2,
        explanation: "A área de um triângulo é dada pela metade do produto da base (b) pela altura (h)."
    },
];

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    document.getElementById("explanation").textContent = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(answer) {
    const q = questions[currentQuestion];
    const explanation = document.getElementById("explanation");
    if (answer === q.correctAnswer) {
        explanation.textContent = `Correto! ${q.explanation}`;
    } else {
        explanation.textContent = `Errado. ${q.explanation}`;
    }
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Você completou o quiz!");
    }
}

loadQuestion();
