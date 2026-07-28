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
// 3. FUNCȚIE GLOBALĂ PENTRU SCROLL LA AN (ARHIVĂ)
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
// 5. DOM CONTENT LOADED (EXECUȚIE PRINCIPALĂ)
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

    // D. SISTEM UNIFICAT DE CĂUTARE (Index & Arhivă Subiecte)
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const yearSections = document.querySelectorAll('.year-section');
    const yearCards = document.querySelectorAll('.year-card');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const homeCards = document.querySelectorAll('.card, .module-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();

            // Cazul 1: Suntem pe pagina de Arhivă Subiecte (are .year-section)
            if (yearSections.length > 0) {
                let visibleCount = 0;

                if (query === '') {
                    if (searchResults) {
                        searchResults.style.display = 'none';
                        searchResults.innerHTML = '';
                    }
                    yearSections.forEach(section => section.style.display = 'block');
                    return;
                }

                let dropdownContent = '';

                yearSections.forEach((section) => {
                    const yearTitle = section.querySelector('.year-title');
                    const yearText = yearTitle ? yearTitle.textContent.toLowerCase() : '';

                    if (yearText.includes(query)) {
                        section.style.display = 'block';
                        visibleCount++;

                        const yearNumber = yearText.replace(/[^0-9]/g, '');
                        dropdownContent += `
                            <div class="search-item" onclick="scrollToYear('${yearNumber}')">
                                <span>📅 BAC ${yearNumber}</span>
                                <span class="search-item-badge">Sesiuni Iunie & Toamnă</span>
                            </div>
                        `;
                    } else {
                        section.style.display = 'none';
                    }
                });

                if (searchResults) {
                    if (dropdownContent !== '') {
                        searchResults.innerHTML = dropdownContent;
                        searchResults.style.display = 'block';
                    } else {
                        searchResults.innerHTML = '<div class="search-item" style="color: #a0aec0; justify-content: center;">Nu am găsit niciun an</div>';
                        searchResults.style.display = 'block';
                    }
                }
            } 
            // Cazul 2: Suntem pe altă pagină (de ex. Arhivă simplă cu .year-card)
            else if (yearCards.length > 0) {
                let visibleCount = 0;

                yearCards.forEach((card) => {
                    const yearAttr = card.getAttribute('data-year') || '';
                    const cardText = card.textContent.toLowerCase();

                    if (query === '' || yearAttr.includes(query) || cardText.includes(query)) {
                        card.style.display = '';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (noResultsMessage) {
                    noResultsMessage.style.display = (visibleCount === 0) ? 'block' : 'none';
                }
            }
            // Cazul 3: Suntem pe Pagina Principală (index.html) - filtrează cardurile
            else if (homeCards.length > 0) {
                homeCards.forEach((card) => {
                    const cardText = card.textContent.toLowerCase();

                    if (query === '' || cardText.includes(query)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });

        // Ascunde dropdown-ul de căutare dacă utilizatorul dă click în afara lui
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && searchResults && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
});

// ==========================================
// 6. ANIMAȚII LA LOAD
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
