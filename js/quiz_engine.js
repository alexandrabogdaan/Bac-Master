// 1. Baza de date cu întrebările de Subiectul I
const databaseSubiecte = {
    "2025_iunie": [
        {
            enunt: "1. Indicați expresia C/C++ cu aceeaşi valoare ca a expresiei alăturate: <code>2025%2019+6</code>",
            optiuni: [
                "2025/2020+5", 
                "2025/2021+8", 
                "2025%2020+5", 
                "2025%2021+8"
            ],
            corect: 3, // Varianta d (Corectat!)
            explicatie: "Expresia din enunț este: 2025 % 2019 + 6 = 6 + 6 = 12.<br>Să le calculăm pe fiecare:<br>a. 2025 / 2020 + 5 = 1 + 5 = 6<br>b. 2025 / 2021 + 8 = 0 + 8 = 8<br>c. 2025 % 2020 + 5 = 5 + 5 = 10<br>d. 2025 % 2021 + 8 = 4 + 8 = 12. Prin urmare, varianta D oferă exact aceeași valoare."
        },
        {
            enunt: "2. Subprogramul f este definit mai jos. Indicați ce se afișează în urma apelului: <code>f(3);</code><pre>void f(int n)\n{\n  int i;\n  for(i=1;i&lt;=n;i++)\n    if(i%2==0) {\n      cout&lt;&lt;i;\n      f(i-1);\n    }\n    else {\n      f(i-1);\n      cout&lt;&lt;i;\n    }\n}</pre>",
            optiuni: [
                "1211213", 
                "123121", 
                "123", 
                "01201012013"
            ],
            corect: 0, // Varianta a
            explicatie: "Urmărim arborele apelurilor pentru f(3):<br>- i=1 (impar): se apelează f(0) (nu face nimic), apoi se afișează 1.<br>- i=2 (par): se afișează 2, apoi se apelează f(1). Din f(1) se execută bucla pentru i=1, generând afișarea lui 1. Până acum avem pe ecran: 121.<br>- i=3 (impar): se apelează f(2). f(2) execută din nou logica pentru i=1 și i=2, adăugând în istoric textul 121. La sfârșit se tipărește i-ul curent (care este 3).<br>Concatenând toate valorile rezultă: 121 + 121 + 3 = 1211213."
        },
        {
            enunt: "3. Indicați o declarare a unui tablou bidimensional m, care poate memora maximum 100 de numere reale.",
            optiuni: [
                "float m[2,50];", 
                "float m[4][25];", 
                "float m[10] x float m[10];", 
                "int m[100];"
            ],
            corect: 1, // Varianta b
            explicatie: "În C++, matricile se declară folosind sintaxa: tip nume[linii][coloane]. Varianta b definește o matrice de tip float (numere reale) cu 4 linii și 25 de coloane, ocupând exact 4 * 25 = 100 de spații de memorie. Varianta d alocă tot 100 de valori, dar este un vector simplu de tip int (întregi)."
        },
        {
            enunt: "4. Utilizând metoda backtracking, s-au generat codurile de câte 6 cifre distincte, unde primele trei cifre sunt impare și ultimele trei sunt pare. Primele coduri: 135024, 135026... Indicați penultimul cod generat.",
            optiuni: [
                "957862", 
                "957846", 
                "975862", 
                "975846"
            ],
            corect: 2, // Varianta c
            explicatie: "Ultimele coduri generate vor începe obligatoriu cu cele mai mari cifre impare posibile plasate în ordine strict descrescătoare pe primele 3 poziții: 9, 7, 5. Codul va avea forma 975xxx.<br>Pentru ultimele 3 poziții (cifre pare distincte), cele mai mari valori rămase în ordine lexicografică sunt:<br>...975860<br>...975862 (Penultimul generat)<br>...975864 (Ultimul cod din șir)"
        },
        {
            enunt: "5. Un graf orientat fără circuite are 10 vârfuri. Indicați numărul maxim de arce ale grafului.",
            optiuni: [
                "10", 
                "45", 
                "50", 
                "90"
            ],
            corect: 1, // Varianta b
            explicatie: "Un graf orientat este fără circuite și are număr maxim de arce dacă este un graf turneu orientat (există arc între oricare două vârfuri, însă orientat exclusiv de la nodul mai mic la cel mai mare pentru a preveni circuitele). Numărul maxim de arce posibile se calculează prin formula combinărilor de n luate câte 2: 10 * 9 / 2 = 45."
        }
    ],
    "2025_toamna": [
        {
            enunt: "Exemplu: Întrebarea pentru sesiunea de Toamnă 2025 va apărea aici.",
            optiuni: ["Varianta A", "Varianta B", "Varianta C", "Varianta D"],
            corect: 0,
            explicatie: "Aici veți scrie explicația când completați sesiunea de toamnă."
        }
    ]
};

// 2. Variabile de stare pentru gestionarea quiz-ului
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

// 3. Funcția automată la încărcarea paginii
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const an = urlParams.get('an') || "2025";
    const ses = urlParams.get('ses') || "iunie";
    
    const cheie = `${an}_${ses}`;
    
    // Corectat formatul titlului dinamic conform preferinței tale
    const titluElement = document.getElementById("quiz-title");
    if (titluElement) {
        titluElement.innerText = `Antrenament Subiect BAC ${an} ${ses.charAt(0).toUpperCase() + ses.slice(1)}`;
    }

    if (databaseSubiecte[cheie]) {
        currentQuestions = databaseSubiecte[cheie];
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = `
            <p class='question-text' style='text-align:center; padding: 20px;'>
                ⚠️ Întrebările interactive pentru sesiunea <strong>${ses.toUpperCase()} (${an})</strong> nu au fost adăugate încă în fișierul JavaScript.
            </p>
        `;
        document.getElementById("submit-btn").style.display = "none";
    }
};

// 4. Funcția de randare/afișare a întrebării curente
function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    
    document.getElementById("question-counter").innerText = `Exercițiul ${currentQuestionIndex + 1} din ${currentQuestions.length}`;
    document.getElementById("question-text").innerHTML = q.enunt;
    document.getElementById("feedback-box").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "block";
    selectedOptionIndex = null;

    const listHtml = document.getElementById("options-list");
    listHtml.innerHTML = "";
    
    q.optiuni.forEach((text, index) => {
        const item = document.createElement("div");
        item.className = "option-item";
        item.id = `option-${index}`;
        item.innerHTML = `<input type="radio" name="quiz-opt" value="${index}"> <span>${text}</span>`;
        
        item.onclick = function() {
            document.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));
            item.classList.add("selected");
            item.querySelector("input").checked = true;
            selectedOptionIndex = index;
        };
        
        listHtml.appendChild(item);
    });
}

// 5. Verificarea răspunsului ales
function checkAnswer() {
    if (selectedOptionIndex === null) {
        alert("Te rugăm să selectezi o variantă de răspuns înainte de a trimite!");
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    const feedbackBox = document.getElementById("feedback-box");
    const feedbackText = document.getElementById("feedback-text");
    const explanationText = document.getElementById("explanation-text");

    document.querySelectorAll(".option-item").forEach(el => el.style.pointerEvents = "none");

    if (selectedOptionIndex === q.corect) {
        feedbackBox.className = "feedback-box feedback-success";
        feedbackText.innerHTML = "🎉 Corect! Ai obținut 4 puncte.";
        score += 4;
        document.getElementById("score-counter").innerText = `Scor: ${score} p`;
    } else {
        feedbackBox.className = "feedback-box feedback-error";
        const litereRăspuns = ["a", "b", "c", "d"];
        feedbackText.innerHTML = `❌ Greșit! Răspunsul corect era varianta <strong>${litereRăspuns[q.corect].toUpperCase()}</strong>.`;
        
        document.getElementById(`option-${q.corect}`).style.borderColor = "#48bb78";
        document.getElementById(`option-${q.corect}`).style.backgroundColor = "#c6f6d5";
    }

    explanationText.innerHTML = q.explicatie;
    feedbackBox.style.display = "block";
    
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "block";
}

// 6. Trecerea la următorul exercițiu
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = `
            <div style="text-align: center; padding: 30px 10px;">
                <h3 style="color: #2b6cb0; font-size: 1.6rem; margin-bottom: 10px;">🎉 Felicitări! Ai finalizat testul.</h3>
                <p style="font-size: 1.2rem; color: #4a5568;">Scorul tău final este de <strong>${score} puncte</strong> dintr-un maxim de ${currentQuestions.length * 4} puncte alocate acestor grile.</p>
                <a href="subiecte.html" class="btn-primary" style="display:inline-block; margin-top: 20px; text-decoration:none; padding:10px 20px; background:#3182ce; color:white; border-radius:6px; font-weight:600;">Înapoi la arhivă</a>
            </div>
        `;
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("feedback-box").style.display = "none";
    }
}
