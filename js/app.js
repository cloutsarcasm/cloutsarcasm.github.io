(function () {
    'use strict';

    var themeToggle = document.querySelector('.theme-toggle');
    var body = document.body;

    function toggleTheme() {
        body.classList.toggle('light-mode');
        themeToggle.textContent = body.classList.contains('light-mode') ? '🌞' : '🌙';
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    }

    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

    document.addEventListener('DOMContentLoaded', function () {
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            if (themeToggle) themeToggle.textContent = '🌞';
        }

        document.querySelectorAll('.shayari-card').forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                card.style.transform = 'perspective(1000px) rotateX(' + ((y - rect.height / 2) / 20) + 'deg) rotateY(' + ((x - rect.width / 2) / 20) + 'deg) translateY(-10px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = 'none';
            });
        });
    });
})();
