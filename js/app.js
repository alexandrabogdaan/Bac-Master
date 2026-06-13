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

// Toggle lesson list open/closed when card header is clicked
const classHeaders = document.querySelectorAll('.class-card > h3');
classHeaders.forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('open');
    });
});