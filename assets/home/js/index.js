let currentWidth;

// Functions
function updateWidth() {
    currentWidth = window.innerWidth;
}

function redirectToVersion() {
    if (currentWidth <= 768) {
        window.location.href = "mobile.html";
    } else {
        window.location.href = "desktop.html";
    }
};

// DOM Event
document.addEventListener("DOMContentLoaded", () => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
});

// Btns Events
directionBtn.addEventListener("click", () => {
    redirectToVersion();
})

cvBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "https://pyxhd.github.io/Portfolio/assets/download/CV-CHARVOTMarc.pdf";
    link.download = "CV-CHARVOTMarc.pdf";
    link.click();
});