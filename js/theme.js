(function () {
    const applyTheme = () => {
        const isLight = localStorage.getItem('theme') === 'light';
        document.body.classList.toggle('light-mode', isLight);
        document.documentElement.classList.toggle('light-mode', isLight);
        document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTheme, { once: true });
    } else {
        applyTheme();
    }
})();
