// =====================
// SIDEBAR TOGGLE
// =====================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
}


// =====================
// SEARCH BAR (basic)
// =====================

const searchInput = document.querySelector(".topbar input");

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        const cards = document.querySelectorAll(".module-card, .card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// =====================
// SIMPLE ANIMATION ON LOAD
// =====================

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
            heading.textContent = 'Profil Elev';
            parag.textContent = 'Autentifică-te pentru a accesa progresul și setările tale personale.';
            submitBtn.textContent = 'Loghează-te';
            submitBtn.value = 'login';
            registerOnly.forEach(el => el.style.display = 'none');
            document.getElementById('confirmPassword').required = false;
            toggle.textContent = 'Creează cont nou';
        } else {
            heading.textContent = 'Creează cont';
            parag.textContent = 'Completează formularul pentru a crea un cont nou.';
            submitBtn.textContent = 'Înregistrează-te';
            submitBtn.value = 'register';
            registerOnly.forEach(el => el.style.display = 'block');
            document.getElementById('confirmPassword').required = true;
            toggle.textContent = 'Am deja cont';
        }
    }

    toggle.addEventListener('click', () => setMode(mode === 'login' ? 'register' : 'login'));
    setMode('login');

    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', function (e) {
            if (submitBtn.value === 'register') {
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

// Toggle lesson list open/closed when card header is clicked
const classHeaders = document.querySelectorAll('.class-card > h3');
classHeaders.forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('open');
    });
});