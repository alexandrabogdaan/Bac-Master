// Detectăm dacă suntem în /pages/ sau în rădăcina site-ului, ca linkurile
// generate din JS (butonul de profil, etc.) să fie corecte din orice pagină.
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
function updateProfileButton() {
    const profileButton = document.querySelector('.profile');
    const username = getCookie('username');

    if (profileButton) {
        if (username) {
            profileButton.textContent = '👤 ' + decodeURIComponent(username);
            profileButton.href = `${prefix}delogare.html`;
        } else {
            profileButton.textContent = '👤 Intră în cont';
            profileButton.href = `${prefix}login.html`;
        }
    }
}

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
            if (heading) heading.textContent = 'Profil Elev';
            if (parag) parag.textContent = 'Autentifică-te pentru a accesa progresul și setările tale personale.';
            if (submitBtn) {
                submitBtn.textContent = 'Loghează-te';
                submitBtn.value = 'login';
            }
            registerOnly.forEach(el => el.style.display = 'none');
            const confirmPw = document.getElementById('confirmPassword');
            if (confirmPw) confirmPw.required = false;
            toggle.textContent = 'Creează cont nou';
        } else {
            if (heading) heading.textContent = 'Creează cont';
            if (parag) parag.textContent = 'Completează formularul pentru a crea un cont nou.';
            if (submitBtn) {
                submitBtn.textContent = 'Înregistrează-te';
                submitBtn.value = 'register';
            }
            registerOnly.forEach(el => el.style.display = 'block');
            const confirmPw = document.getElementById('confirmPassword');
            if (confirmPw) confirmPw.required = true;
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

document.addEventListener("DOMContentLoaded", () => {
    updateProfileButton();

    // ==========================================
    // 1. FILTRARE DIRECTĂ ÎN PAGINĂ DUPĂ AN
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    const yearCards = document.querySelectorAll('.year-card');
    const noResultsMessage = document.getElementById('noResultsMessage');

    if (searchInput && yearCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            let visibleCount = 0;

            yearCards.forEach((card) => {
                // Verifică atributul data-year sau textul din card
                const yearAttr = card.getAttribute('data-year') || '';
                const cardText = card.textContent.toLowerCase();

                // Dacă căutarea e goală SAU anul se potrivește cu textul tastaț
                if (query === '' || yearAttr.includes(query) || cardText.includes(query)) {
                    card.style.display = ''; // Îl afișează
                    visibleCount++;
                } else {
                    card.style.display = 'none'; // Îl ascunde
                }
            });

            // Afișează mesajul dacă nu s-a găsit niciun an
            if (noResultsMessage) {
                noResultsMessage.style.display = (visibleCount === 0) ? 'block' : 'none';
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
    // 3. ACCORDION CARDURI
    // ==========================================
    const classHeaders = document.querySelectorAll('.class-card > h3');
    classHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });

    // ==========================================
    // 4. INIȚIALIZĂRI TESTE
    // ==========================================
    initChapterDropdowns();
    initQuizGrille();
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

    initProfileAuthMode();
});
