// Imports
import { burgerMenuAnim, sectionAppearances } from "./nav/navAnim.js";
import { backgroundAnimation } from "./settings/background.js";
import { lightMode, darkMode } from "./settings/lightDarkMode.js";
import { leftHander, rightHander } from "./settings/hander.js";
import { languageSelection } from "./settings/translate.js";
import { formEvent } from "./sections/contact.js";
import { checkWindowSize } from "./settings/redirection.js";
import { showMeDetails } from "./sections/details.js";
import { cvDownloader } from "./settings/cvDownload.js";

document.addEventListener("DOMContentLoaded", () => {

    // Nav
    burgerMenuAnim();
    sectionAppearances();

    // Background
    backgroundAnimation();

    // Settings
    lightMode();
    darkMode();
    leftHander();
    rightHander();
    languageSelection();

    // Form
    formEvent();

    // Resize
    checkWindowSize();

    // Details Section
    showMeDetails();

    // Download Event
    cvDownloader();
})