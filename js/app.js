document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. CONFIGURARE LOGICĂ CĂUTARE GLOBALĂ
    // ==========================================
    
    // Detectăm unde se află utilizatorul în acest moment (în rădăcină sau în /pages/)
    const isInPagesFolder = window.location.pathname.includes('/pages/');

    // Setați prefixul corect pentru URL-uri în funcție de locație
    const prefix = isInPagesFolder ? '' : 'pages/';
    const homePrefix = isInPagesFolder ? '../' : '';

    // Baza de date a paginilor site-ului tău (pentru căutare)
    const sitePages = [
        { title: "🏠 Acasă / Dashboard", url: `${homePrefix}index.html`, keywords: ["acasa", "main", "dashboard", "index", "start"] },
        { title: "📘 Teorie: Recursivitate", url: `${prefix}recursivitate.html`, keywords: ["recursivitate", "teorie", "factorial", "stiva", "stack"] },
        { title: "📘 Teorie Materie", url: `${prefix}teorie.html`, keywords: ["teorie", "materie", "clase", "vectori", "matrice"] },
        { title: "💻 Algoritmi Vizuali", url: `${prefix}algoritmi.html`, keywords: ["algoritmi", "sortare", "cautare", "grafuri", "vizual"] },
        { title: "📝 Teste Grilă", url: `${prefix}teste.html`, keywords: ["teste", "grila", "quiz", "evaluare", "verificare"] },
        { title: "🧩 Probleme Rezolvate", url: `${prefix}probleme.html`, keywords: ["probleme", "subiectul 3", "bac", "exercitii"] },
        { title: "📊 Statistici Progres", url: `${prefix}statistici.html`, keywords: ["statistici", "progres", "grafic", "note"] },
        { title: "⚙️ Setări Cont", url: `${prefix}setari.html`, keywords: ["setari", "configurare", "tema", "profil"] }
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
});

// ==========================================
// 4. LOGICĂ PAGINĂ PROFIL & ANIMAȚII (LA LOAD)
// ==========================================
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
