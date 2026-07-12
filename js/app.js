// Detectăm dacă suntem în /pages/ sau în rădăcina site-ului, ca linkurile
// generate din JS (butonul de profil, căutarea) să fie corecte din orice pagină.
const isInPagesFolder = window.location.pathname.includes('/pages/');
const prefix = isInPagesFolder ? '' : 'pages/';
const homePrefix = isInPagesFolder ? '../' : '';

// Funcție pentru a extrage valoare din cookies
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

// Actualizez butonul "Contul meu" în funcție de starea logării
// (cookie-ul "username" e setat de auth.php la login/register reușit)
function updateProfileButton() {
    const profileButton = document.querySelector('.profile');
    const username = getCookie('username');

    if (profileButton) {
        if (username) {
            // Utilizatorul este logat -> click duce la pagina de confirmare deconectare
            profileButton.textContent = '👤 ' + decodeURIComponent(username);
            profileButton.href = `${prefix}delogare.html`;
        } else {
            // Utilizatorul NU este logat -> click duce la login
            profileButton.textContent = '👤 Intră în cont';
            profileButton.href = `${prefix}login.html`;
        }
    }
}

// Apelez funcția la încărcarea paginii
updateProfileButton();

function initChapterDropdowns() {
    const classTitles = document.querySelectorAll('.quiz-class-title');

    classTitles.forEach(function (title) {
        const questions = [];
        let current = title.nextElementSibling;

        while (current && !current.classList.contains('quiz-class-title')) {
            if (current.classList.contains('quiz-question-block')) {
                questions.push(current);
            }
            current = current.nextElementSibling;
        }

        if (!questions.length) return;

        const chapterGroups = new Map();

        questions.forEach(function (block) {
            const chapterTag = block.querySelector('.quiz-chapter-tag');
            const chapterName = chapterTag ? chapterTag.textContent.trim() : 'General';

            if (!chapterGroups.has(chapterName)) {
                chapterGroups.set(chapterName, []);
            }
            chapterGroups.get(chapterName).push(block);
        });

        const accordion = document.createElement('div');
        accordion.className = 'quiz-chapter-accordion';
        title.parentNode.insertBefore(accordion, title.nextSibling);

        chapterGroups.forEach(function (blocks, chapterName) {
            const panelId = 'quiz-chapter-' + chapterName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'quiz-chapter-toggle';
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.innerHTML = `<span>${chapterName}</span><span class="quiz-chapter-toggle-icon">+</span>`;

            const panel = document.createElement('div');
            panel.className = 'quiz-chapter-panel';
            panel.id = panelId;

            blocks.forEach(function (block) {
                panel.appendChild(block);
            });

            toggleBtn.addEventListener('click', function () {
                const isOpen = toggleBtn.classList.contains('active');
                const parentAccordion = toggleBtn.closest('.quiz-chapter-accordion');

                parentAccordion.querySelectorAll('.quiz-chapter-toggle').forEach(function (btn) {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-expanded', 'false');
                });
                parentAccordion.querySelectorAll('.quiz-chapter-panel').forEach(function (item) {
                    item.classList.remove('open');
                });

                if (!isOpen) {
                    toggleBtn.classList.add('active');
                    toggleBtn.setAttribute('aria-expanded', 'true');
                    panel.classList.add('open');
                }
            });

            accordion.appendChild(toggleBtn);
            accordion.appendChild(panel);
        });
    });
}

function initQuizGrille() {
    const questionBlocks = document.querySelectorAll('.quiz-question-block');

    if (!questionBlocks.length) return;

    questionBlocks.forEach(function (block) {
        const options = block.querySelectorAll('.quiz-option');
        const checkBtn = block.querySelector('.quiz-check-btn');
        const feedback = block.querySelector('.quiz-feedback');
        const correctLetter = block.getAttribute('data-correct');

        options.forEach(function (option) {
            option.addEventListener('click', function () {
                options.forEach(function (o) {
                    o.classList.remove('selected');
                });
                option.classList.add('selected');
                option.querySelector('input[type="radio"]').checked = true;
            });
        });

        checkBtn.addEventListener('click', function () {
            const selected = block.querySelector('.quiz-option.selected');

            if (!selected) {
                feedback.textContent = 'Selectează o variantă înainte de a verifica.';
                feedback.className = 'quiz-feedback incorrect';
                return;
            }

            const selectedLetter = selected.getAttribute('data-letter');
            const isCorrect = selectedLetter === correctLetter;

            options.forEach(function (option) {
                option.classList.add('disabled');
                option.style.pointerEvents = 'none';

                const letter = option.getAttribute('data-letter');
                if (letter === correctLetter) {
                    option.classList.add('correct-answer');
                } else if (option === selected) {
                    option.classList.add('wrong-answer');
                }
            });

            feedback.textContent = isCorrect
                ? '✔ Corect!'
                : '✘ Greșit. Răspunsul corect era: ' + correctLetter;
            feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'incorrect');

            checkBtn.disabled = true;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Actualizez din nou după ce DOM-ul e complet încărcat
    updateProfileButton();

    // ==========================================
    // 1. CONFIGURARE LOGICĂ CĂUTARE GLOBALĂ
    // ==========================================

    // Baza de date extinsă cu toate capitolele de teorie din programă
    const sitePages = [
        // Pagini principale
        { title: "🏠 Acasă / Dashboard", url: `${homePrefix}index.html`, keywords: ["acasa", "main", "dashboard", "index", "start"] },
        { title: "📘 Teorie Materie (Toate clasele)", url: `${prefix}teorie.html`, keywords: ["teorie", "materie", "clase", "lectii", "capitole"] },
        { title: "💻 Algoritmi Vizuali", url: `${prefix}algoritmi.html`, keywords: ["algoritmi", "sortare", "cautare", "interactiv", "vizual"] },
        { title: "📝 Teste Grilă", url: `${prefix}teste.html`, keywords: ["teste", "grila", "quiz", "evaluare", "verificare"] },
        { title: "🧩 Probleme Rezolvate", url: `${prefix}probleme.html`, keywords: ["probleme", "subiectul 3", "bac", "exercitii"] },
        { title: "📊 Statistici Progres", url: `${prefix}statistici.html`, keywords: ["statistici", "progres", "grafic", "note"] },
        { title: "⚙️ Setări Cont", url: `${prefix}setari.html`, keywords: ["setari", "configurare", "tema", "profil"] },

        // Capitole Clasa a IX-a
        { title: "📘 IX: Variabile și tipuri de date", url: `${prefix}variabile.html`, keywords: ["variabile", "tipuri de date", "int", "float", "char", "clasa 9"] },
        { title: "📘 IX: Operatori C++", url: `${prefix}operatori.html`, keywords: ["operatori", "aritmetici", "logici", "atribuire", "modulo", "clasa 9"] },
        { title: "📘 IX: Algoritmi de bază", url: `${prefix}algoritmi.html`, keywords: ["algoritmi de baza", "cmmdc", "oglinzit", "prim", "cifre", "divizori", "clasa 9"] },
        { title: "📘 IX: Tablouri unidimensionale (Vectori)", url: `${prefix}vectori.html`, keywords: ["tablouri unidimensionale", "vectori", "parcurgere", "vector", "clasa 9"] },
        { title: "📘 IX: Tablouri bidimensionale (Matrice)", url: `${prefix}matrice.html`, keywords: ["tablouri bidimensionale", "matrice", "linii", "coloane", "diagonala", "clasa 9"] },
        { title: "📘 IX: Fișiere", url: `${prefix}fisier.html`, keywords: ["fisiere", "ifstream", "ofstream", "fout", "fin", "clasa 9"] },

        // Capitole Clasa a X-a
        { title: "📘 X: Subprograme și modularizare", url: `${prefix}subprograme.html`, keywords: ["subprograme", "modularizare", "functii", "parametri", "transmitere", "clasa 10"] },
        { title: "📘 X: Recursivitate", url: `${prefix}recursivitate.html`, keywords: ["recursivitate", "recursiv", "factorial", "stiva", "stack", "clasa 10"] },
        { title: "📘 X: Șiruri de caractere", url: `${prefix}siruri.html`, keywords: ["siruri de caractere", "string", "cstring", "strcpy", "strlen", "strtok", "clasa 10"] },
        { title: "📘 X: Structuri de date (Stiva, Coada)", url: `${prefix}structuri-date.html`, keywords: ["structuri de date", "stiva", "coada", "pop", "push", "clasa 10"] },

        // Capitole Clasa a XI-a
        { title: "📘 XI: Metoda Backtracking", url: `${prefix}backtracking.html`, keywords: ["backtracking", "permutari", "aranjamente", "combinari", "stiva bkt", "clasa 11"] },
        { title: "📘 XI: Metoda Greedy", url: `${prefix}greedy.html`, keywords: ["greedy", "optimizare", "rucsac", "spectacole", "clasa 11"] },
        { title: "📘 XI: Teoria grafurilor (Neorientate/Orientate)", url: `${prefix}grafuri.html`, keywords: ["teoria grafurilor", "grafuri", "graf neorientat", "graf orientat", "arbori", "clasa 11"] },
        { title: "📘 XI: Structuri de date arborescente", url: `${prefix}arbori.html`, keywords: ["structuri de date arborescente", "arbori", "arbore", "radacina", "frunze", "clasa 11"] }
    ];

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            if (query === '') {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
                return;
            }

            // Filtrare în baza de date
            const filteredResults = sitePages.filter(page => {
                const matchTitle = page.title.toLowerCase().includes(query);
                const matchKeywords = page.keywords.some(keyword => keyword.includes(query));
                return matchTitle || matchKeywords;
            });

            // Afișare rezultate în dropdown
            if (filteredResults.length > 0) {
                searchResults.innerHTML = filteredResults.map(page => `
                    <a href="${page.url}" class="search-item">
                        ${page.title}
                    </a>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = `<div class="search-no-results">Niciun rezultat găsit 😕</div>`;
                searchResults.style.display = 'block';
            }
        });

        // Închide dropdown-ul la click în exterior
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    // ==========================================
    // 2. SIDEBAR TOGGLE
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
        });
    }

    // ==========================================
    // 3. RECUPERARE LOGICĂ LISTE LECȚII (ACCORDION)
    // ==========================================
    const classHeaders = document.querySelectorAll('.class-card > h3');
    classHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });

    // ==========================================
    // 4. LOGICĂ TESTE GRILĂ
    // ==========================================
    initChapterDropdowns();
    initQuizGrille();
});

// ==========================================
// 4. LOGICĂ PAGINĂ PROFIL & ANIMAȚII (LA LOAD)
// ==========================================
// Notă: rămâne aici doar pentru compatibilitate, în caz că mai există undeva
// o pagină combinată cu #toggleMode. Pe login.html / creare-cont.html / delogare.html
// (paginile noi, separate) elementul nu există, deci funcția iese imediat.
function initProfileAuthMode() {
    const toggle = document.getElementById('toggleMode');
    if (!toggle) return;

    const registerOnly = document.querySelectorAll('.register-only');
    const submitBtn = document.getElementById('submitBtn');
    const heading = document.querySelector('.profile-card h1');
    const parag = document.querySelector('.profile-card p');
    let mode = 'login';

    function setMode(m) {
        mode = m;
        if (mode === 'login') {
            if(heading) heading.textContent = 'Profil Elev';
            if(parag) parag.textContent = 'Autentifică-te pentru a accesa progresul și setările tale personale.';
            if(submitBtn) {
                submitBtn.textContent = 'Loghează-te';
                submitBtn.value = 'login';
            }
            registerOnly.forEach(el => el.style.display = 'none');
            const confirmPw = document.getElementById('confirmPassword');
            if(confirmPw) confirmPw.required = false;
            toggle.textContent = 'Creează cont nou';
        } else {
            if(heading) heading.textContent = 'Creează cont';
            if(parag) parag.textContent = 'Completează formularul pentru a crea un cont nou.';
            if(submitBtn) {
                submitBtn.textContent = 'Înregistrează-te';
                submitBtn.value = 'register';
            }
            registerOnly.forEach(el => el.style.display = 'block');
            const confirmPw = document.getElementById('confirmPassword');
            if(confirmPw) confirmPw.required = true;
            toggle.textContent = 'Am deja cont';
        }
    }

    toggle.addEventListener('click', () => setMode(mode === 'login' ? 'register' : 'login'));
    setMode('login');

    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', function (e) {
            if (submitBtn && submitBtn.value === 'register') {
                const pw = document.getElementById('password').value;
                const cpw = document.getElementById('confirmPassword').value;
                if (pw !== cpw) {
                    e.preventDefault();
                    alert('Parolele nu se potrivesc.');
                }
            }
        });
    }
}

// Animațiile se declanșează când se termină de încărcat resursele paginii
window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".card, .module-card, .hero");

    elements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";

        setTimeout(() => {
            el.style.transition = "0.5s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 100);
    });

    initProfileAuthMode();
});
