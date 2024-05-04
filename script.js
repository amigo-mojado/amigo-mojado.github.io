// script.js

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuButton = document.querySelector('.burger-menu');
    const navDesktop = document.querySelector('.nav-desktop');

    // Eventlistener für Klick auf den Burger-Menü-Button
    burgerMenuButton.addEventListener('click', function() {
        // Überprüfen, ob das Navigationsmenü sichtbar ist
        if (navDesktop.style.display === 'flex') {
            // Navigationsmenü ausblenden
            navDesktop.style.display = 'none';
        } else {
            // Navigationsmenü einblenden
            navDesktop.style.display = 'flex';
        }
    });
});
