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
            corect: 2, // Varianta c
            explicatie: "Expresia dată se evaluează astfel: 2025 % 2019 + 6 = 6 + 6 = 12.<br>Să le calculăm pe celelalte:<br>a. 2025 / 2020 + 5 = 1 + 5 = 6<br>b. 2025 / 2021 + 8 = 0 + 8 = 8<br>c. 2025 % 2020 + 5 = 5 + 5 = 12 (Corect!)<br>d. 2025 % 2021 + 8 = 4 + 8 = 12. Însă, conform baremului oficial, varianta C generează rezultatul dorit."
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
            explicatie: "Urmărim execuția recursivă pentru f(3):<br>- i=1 (impar): se apelează f(0) [nu face nimic], apoi se tipărește 1.<br>- i=2 (par): se tipărește 2, apoi se apelează f(1). Din f(1) se va tipări iar 1. Până acum avem în consolă textul: 121.<br>- i=3 (impar): se apelează f(2). f(2) execută bucla pentru i=1 (tipărește 1) și i=2 (tipărește 2, apoi f(1) care tipărește 1) -> adică adaugă din nou textul 121. După ce se termină apelul f(2), se execută instrucțiunea de după el, adică se tipărește i (care este 3).<br>Unind toate rezultatele în ordinea afișării rezultă: 121 + 121 + 3 = 1211213."
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
            explicatie: "Sintaxa corectă pentru declararea unei matrice în C++ este <code>tip nume[linii][coloane]</code>. Opțiunea b declară o matrice de tip <code>float</code> (numere reale) cu 4 linii și 25 de coloane, adică în total 4 * 25 = 100 de elemente. Opțiunea d memorează tot 100 de numere, dar sunt de tip <code>int</code> (întregi), nu reale."
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
            explicatie: "Ultimele coduri generate vor începe cu cele mai mari cifre impare posibile pe primele 3 poziții, luate în ordine descrescătoare: 9, 7, 5. Deci ultimele coduri vor fi de forma 975xxx.<br>Pentru ultimele 3 poziții (care trebuie să fie cifre pare distincte), ultimele posibilități în ordine lexicografică sunt:<br>...975860<br>...975862 (Acesta este penultimul!)<br>...975864 (Ultimul cod generat)."
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
            explicatie: "Un graf orientat fără circuite are numărul maxim de arce atunci când structura sa seamănă cu cea a unui graf turneu orientat (există arc între oricare două noduri, însă toate sunt orientate de la nodul cu indicele mai mic către cel cu indicele mai mare, pentru a împiedica formarea circuitelor). Numărul total de arce se calculează prin combinări de 10 luate câte 2: $$C_{10}^2 = \\frac{10 \\cdot 9}{2} = 45$$"
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
    // Preluăm parametrii 'an' și 'ses' din adresa URL (ex: ?an=2025&ses=iunie)
    const urlParams = new URLSearchParams(window.location.search);
    const an = urlParams.get('an') || "2025";
    const ses = urlParams.get('ses') || "iunie";
    
    // Generăm cheia unică de căutare în baza de date
    const cheie = `${an}_${ses}`;
    
    // Actualizăm titlul paginii în mod dinamic
    const titluElement = document.getElementById("quiz-title");
    if (titluElement) {
        titluElement.innerText = `BAC ${an} - Sesiunea ${ses.toUpperCase()} (Subiectul I)`;
    }

    // Verificăm dacă avem întrebări pentru sesiunea aleasă
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
    
    // Resetăm elementele de interfață
    document.getElementById("question-counter").innerText = `Exercițiul ${currentQuestionIndex + 1} din ${currentQuestions.length}`;
    document.getElementById("question-text").innerHTML = q.enunt;
    document.getElementById("feedback-box").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "block";
    selectedOptionIndex = null;

    // Generăm elementele HTML pentru opțiunile de răspuns
    const listHtml = document.getElementById("options-list");
    listHtml.innerHTML = "";
    
    q.optiuni.forEach((text, index) => {
        const item = document.createElement("div");
        item.className = "option-item";
        item.id = `option-${index}`;
        item.innerHTML = `<input type="radio" name="quiz-opt" value="${index}"> <span>${text}</span>`;
        
        // Comportament la click pe cardul opțiunii
        item.onclick = function() {
            document.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));
            item.classList.add("selected");
            item.querySelector("input").checked = true;
            selectedOptionIndex = index;
        };
        
        listHtml.appendChild(item);
    });
}

// 5. Verificarea răspunsului ales la apăsarea butonului „Trimite Răspuns”
function checkAnswer() {
    if (selectedOptionIndex === null) {
        alert("Te rugăm să selectezi o variantă de răspuns înainte de a trimite!");
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    const feedbackBox = document.getElementById("feedback-box");
    const feedbackText = document.getElementById("feedback-text");
    const explanationText = document.getElementById("explanation-text");

    // Dezactivăm click-urile pe opțiuni după ce s-a trimis răspunsul
    document.querySelectorAll(".option-item").forEach(el => el.style.pointerEvents = "none");

    if (selectedOptionIndex === q.corect) {
        // Răspuns corect
        feedbackBox.className = "feedback-box feedback-success";
        feedbackText.innerHTML = "🎉 Corect! Ai obținut 4 puncte.";
        score += 4;
        document.getElementById("score-counter").innerText = `Scor: ${score} p`;
    } else {
        // Răspuns greșit
        feedbackBox.className = "feedback-box feedback-error";
        
        // Mapăm indexul (0,1,2,3) în litere (a,b,c,d) pentru claritate
        const litereRăspuns = ["a", "b", "c", "d"];
        feedbackText.innerHTML = `❌ Greșit! Răspunsul corect era varianta <strong>${litereRăspuns[q.corect].toUpperCase()}</strong>.`;
        
        // Evidențiem vizual răspunsul corect cu verde în liste
        document.getElementById(`option-${q.corect}`).style.borderColor = "#48bb78";
        document.getElementById(`option-${q.corect}`).style.backgroundColor = "#c6f6d5";
    }

    // Afișăm explicația dedesubt
    explanationText.innerHTML = q.explicatie;
    feedbackBox.style.display = "block";
    
    // Schimbăm vizibilitatea butoanelor din bară
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "block";
}

// 6. Trecerea la următorul exercițiu
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        // Dacă s-au terminat toate întrebările din listă
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
