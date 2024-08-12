import { textsLightMode } from "../variables.js";
import { banniersH2 } from "../variables.js";

export function lightMode() {
    lightModeBtn.addEventListener("click", () => {
        mainFilter.classList.replace("darkMain", "lightMain");
        mainBackground.classList.replace("darkMainBg", "lightMainBg");
        lightModeBtn.classList.add("modeSelected");
        darkModeBtn.classList.remove("modeSelected");

        textsLightMode.forEach(element => {
            element.style.color = "#0a082e";
        });
        banniersH2.forEach(element => {
            element.style.backgroundColor = "#f5f5f5";
        });
    })
}

export function darkMode() {
    darkModeBtn.addEventListener("click", () => {
        mainFilter.classList.replace("lightMain", "darkMain");
        mainBackground.classList.replace("lightMainBg", "darkMainBg");
        darkModeBtn.classList.add("modeSelected");
        lightModeBtn.classList.remove("modeSelected");

        textsLightMode.forEach(element => {
            element.style.color = "#f5f5f5";
        });
        banniersH2.forEach(element => {
            element.style.backgroundColor = "#0a082e";
        });
    })
}