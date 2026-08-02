let selectedQuestions = [];
let currentIndex = 0;
let score = 0;

let timeLeft = 0;
let timerInterval = null;

// DOM
const setup = document.getElementById("setup");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const timerBox = document.getElementById("timerBox");

const questionText = document.getElementById("questionText");
const answersDiv = document.getElementById("answers");

const timerEl = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");


// =====================
// START TEST
// =====================
startBtn.addEventListener("click", startTest);

function startTest() {
    const count = parseInt(document.getElementById("questionCount").value);

    // shuffle + select
    selectedQuestions = questions
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

    currentIndex = 0;
    score = 0;

    // timp: 1.5 min / întrebare
    timeLeft = count * 90;

    setup.style.display = "none";
    quizBox.style.display = "block";
    timerBox.style.display = "block";

    showQuestion();
    startTimer();
}


// =====================
// TIMER
// =====================
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;

        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;

        timerEl.textContent =
            `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishTest();
        }
    }, 1000);
}


// =====================
// SHOW QUESTION
// =====================
function showQuestion() {
    let q = selectedQuestions[currentIndex];

    questionText.textContent =
        `${currentIndex + 1}. ${q.question}`;

    answersDiv.innerHTML = "";

    q.answers.forEach((ans, index) => {
        let btn = document.createElement("button");

        btn.textContent = ans;
        btn.className = "module-card";
        btn.style.cursor = "pointer";
        btn.style.margin = "5px";
        btn.style.display = "block";

        btn.onclick = () => selectAnswer(index);

        answersDiv.appendChild(btn);
    });
}


// =====================
// SELECT ANSWER
// =====================
let selected = null;

function selectAnswer(index) {
    selected = index;
}


// =====================
// NEXT QUESTION
// =====================
nextBtn.addEventListener("click", () => {

    if (selected === selectedQuestions[currentIndex].correct) {
        score++;
    }

    selected = null;
    currentIndex++;

    if (currentIndex >= selectedQuestions.length) {
        finishTest();
    } else {
        showQuestion();
    }
});


// =====================
// FINISH TEST
// =====================
function finishTest() {
    clearInterval(timerInterval);

    quizBox.style.display = "none";
    timerBox.style.display = "none";
    resultBox.style.display = "block";

    let total = selectedQuestions.length;

    let grade = ((score / total) * 9) + 1; // nota BAC style

    document.getElementById("resultText").textContent =
        `Ai terminat testul!`;

    document.getElementById("scoreText").textContent =
        `Scor: ${score} / ${total} | Nota estimată: ${grade.toFixed(2)}`;

    // save stats
    localStorage.setItem("lastScore", score);
    localStorage.setItem("lastTotal", total);
}