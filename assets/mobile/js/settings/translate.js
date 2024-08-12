import { translations } from "../translations.js";
let currentLanguage = document.querySelector('.flagSelected').id === 'frFlag' ? 'fr' : 'uk';

function toggleLanguage() {
    if (currentLanguage === 'fr') {
        currentLanguage = 'uk';
    } else {
        currentLanguage = 'fr';
    }
    frFlag.classList.toggle('flagSelected');
    ukFlag.classList.toggle('flagSelected');
}

function updateLanguage() {
    let elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
        let key = element.getAttribute('data-translate');
        element.innerHTML = translations[currentLanguage][key];
    });
}

export function languageSelection() {
    console.log(currentLanguage);

    utilsFlag.addEventListener("click", () => {
        toggleLanguage();
        updateLanguage();
    })
}