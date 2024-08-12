export function backgroundAnimation() {
    backgroundElement.style.left = "150%";
    setTimeout(() => {
        backgroundElement.style.left = "-100%";
    }, 1500);
}