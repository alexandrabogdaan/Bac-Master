// ==========================================
// 1. LOGICĂ TESTE & QUIZ-URI
// ==========================================
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
                const radioInput = option.querySelector('input[type="radio"]');
                if (radioInput) radioInput.checked = true;
            });
        });

        if (checkBtn) {
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
        }
    });
}

// ==========================================
// 2. FUNCȚIE GLOBALĂ PENTRU SCROLL LA AN (ARHIVĂ)
// ==========================================
function scrollToYear(year) {
    const sections = document.querySelectorAll('.year-section');
    sections.forEach(section => {
        const title = section.querySelector('.year-title');
        if (title && title.textContent.includes(year)) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            section.style.transition = 'background-color 0.3s';
            section.style.backgroundColor = '#ebf8ff';
            setTimeout(() => {
                section.style.backgroundColor = '#ffffff';
            }, 1000);
        }
    });
    const searchResults = document.getElementById('searchResults');
    if (searchResults) searchResults.style.display = 'none';
}

// ==========================================
// 3. INDEX GLOBAL DE CĂUTARE (PAGINI & ARHIVĂ ANI)
// ==========================================
const isInPages = window.location.pathname.includes('/pages/');
const pathPrefix = isInPages ? "" : "pages/";

const searchableItems = [
    // Teorie și Concepte
    { title: "Recursivitate", category: "Teorie", url: pathPrefix + "recursivitate.html", keywords: ["recursivitate", "functie", "apel", "teorie"] },
    { title: "Arbori", category: "Teorie", url: pathPrefix + "arbori.html", keywords: ["arbori", "binari", "nod", "frunza", "teorie"] },
    { title: "Grafuri", category: "Teorie", url: pathPrefix + "grafuri.html", keywords: ["grafuri", "muchii", "noduri", "conex", "teorie"] },
    { title: "Backtracking", category: "Teorie", url: pathPrefix + "backtracking.html", keywords: ["backtracking", "generare", "metoda", "teorie"] },
    { title: "Greedy", category: "Teorie", url: pathPrefix + "greedy.html", keywords: ["greedy", "metoda", "optimizare", "teorie"] },
    { title: "Matrice", category: "Teorie", url: pathPrefix + "matrice.html", keywords: ["matrice", "tablou bidimensional", "linii", "coloane"] },
    { title: "Vectori", category: "Teorie", url: pathPrefix + "vectori.html", keywords: ["vectori", "tablou unidimensional", "sir"] },
    { title: "Șiruri de caractere", category: "Teorie", url: pathPrefix + "siruri.html", keywords: ["siruri", "caractere", "text", "strcat"] },
    { title: "Subprograme", category: "Teorie", url: pathPrefix + "subprograme.html", keywords: ["subprograme", "functii", "proceduri"] },
    { title: "Structuri de date", category: "Teorie", url: pathPrefix + "structuri-date.html", keywords: ["struct", "inregistrari", "date"] },
    { title: "Structuri de control", category: "Teorie", url: pathPrefix + "structuridecontrol.html", keywords: ["if", "while", "for", "structuri"] },
    { title: "Variabile și Operatori", category: "Teorie", url: pathPrefix + "variabile.html", keywords: ["variabile", "operatori", "tipuri de date"] },
    { title: "Algoritmi Elementari", category: "Algoritmi", url: pathPrefix + "algoritmi.html", keywords: ["cifre", "divizibilitate", "euclid", "fibonacci"] },

    // Arhivă Subiecte BAC pe Ani (2015 - 2025)
    { title: "Arhivă Subiecte BAC", category: "Subiecte", url: pathPrefix + "subiecte.html", keywords: ["subiecte", "arhiva", "bacalaureat", "bac"] },
    { title: "Subiecte BAC 2025", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2025", keywords: ["2025", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2024", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2024", keywords: ["2024", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2023", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2023", keywords: ["2023", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2022", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2022", keywords: ["2022", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2021", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2021", keywords: ["2021", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2020", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2020", keywords: ["2020", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2019", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2019", keywords: ["2019", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2018", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2018", keywords: ["2018", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2017", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2017", keywords: ["2017", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2016", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2016", keywords: ["2016", "bac", "subiecte", "iunie", "toamna"] },
    { title: "Subiecte BAC 2015", category: "Subiecte BAC", url: pathPrefix + "subiecte.html?an=2015", keywords: ["2015", "bac", "subiecte", "iunie", "toamna"] },

    // Secțiuni principale
    { title: "Probleme C++", category: "Probleme", url: pathPrefix + "probleme.html", keywords: ["probleme", "exercitii", "grile"] },
    { title: "Teste Grilă", category: "Teste", url: pathPrefix + "teste.html", keywords: ["teste", "grila", "verificare"] }
];

// ==========================================
// 4. DOM CONTENT LOADED (EXECUȚIE PRINCIPALĂ)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // A. SIDEBAR TOGGLE
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
        });
    }

    // B. ACCORDION CARDURI
    const classHeaders = document.querySelectorAll('.class-card > h3');
    classHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });

    // C. INIȚIALIZĂRI TESTE
    initChapterDropdowns();
    initQuizGrille();

    // D. SCROLL AUTOMAT LA AN DACĂ ESTE PREZENT ÎN URL (ex: ?an=2025)
    const urlParams = new URLSearchParams(window.location.search);
    const targetYear = urlParams.get('an');
    if (targetYear) {
        setTimeout(() => {
            scrollToYear(targetYear);
        }, 200);
    }

    // E. SISTEM UNIFICAT DE CĂUTARE
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!searchResults) return;

            searchResults.innerHTML = '';

            if (query === '') {
                searchResults.style.display = 'none';
                return;
            }

            // Filtrare globală în funcție de titlu sau cuvinte cheie
            const filtered = searchableItems.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.keywords.some(keyword => keyword.toLowerCase().includes(query))
            );

            if (filtered.length === 0) {
                searchResults.innerHTML = '<div class="search-item" style="color: #a0aec0; justify-content: center; padding: 12px;">Nu am găsit niciun rezultat...</div>';
                searchResults.style.display = 'block';
                return;
            }

            let dropdownContent = '';
            filtered.forEach(item => {
                dropdownContent += `
                    <a href="${item.url}" class="search-item" style="text-decoration: none; display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; color: var(--text);">
                        <span>${item.title}</span>
                        <span class="search-item-badge" style="font-size: 0.75rem; padding: 2px 8px; border-radius: 4px; background: var(--primary, #10b981); color: #fff;">${item.category}</span>
                    </a>
                `;
            });

            searchResults.innerHTML = dropdownContent;
            searchResults.style.display = 'block';
        });

        // Ascunde dropdown-ul la click în afara lui
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && searchResults && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
});

// ==========================================
// 5. ANIMAȚII LA LOAD
// ==========================================
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
});
