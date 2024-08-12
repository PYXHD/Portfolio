import { navAppears } from "../variables.js";
import { navLinks } from "../variables.js";
import { sections } from "../variables.js";
import { backgroundAnimation } from "../settings/background.js";

let menuOpen = false;

// Nav Animations
function closeNav() {
    if (menuOpen === true) {
        mainFilter.style.filter = "blur(0) brightness(1)";

        navAppears.forEach(element => {
            element.style.opacity = "0";
        });
        navOverlay.style.display = "block";
        navContainer.style.bottom = "-260px";
        menuOpen = false;
    }
}
export function burgerMenuAnim() {
    burgerMenu.addEventListener("click", () => {
        if (!menuOpen) {
            navOverlay.style.display = "none";
            navContainer.style.bottom = 0;
            mainFilter.style.filter = "blur(4px) brightness(0.9)";

            navAppears.forEach(element => {
                element.style.opacity = "1";
            });
            menuOpen = true;

        } else {
            closeNav();
        }
    })
}

// Sections appearances
export function sectionAppearances() {
    if (sections.length > 0) {
        sections[0].classList.add("show");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            sections.forEach(section => {
                section.classList.remove("show");
            })

            const sectionId = link.getAttribute("data-section");
            const selectedSection = document.getElementById(sectionId);

            if (selectedSection) {
                selectedSection.classList.add("show");
                closeNav();
                backgroundAnimation();
            }
        })
    });
}