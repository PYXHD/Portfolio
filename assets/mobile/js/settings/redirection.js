export function checkWindowSize() {
    const mobileBreakpoint = 768;
    const currentWidth = window.innerWidth;

    const isMobilePage = window.location.href.includes("mobile.html");
    const isDesktopPage = window.location.href.includes("desktop.html");

    if (currentWidth < mobileBreakpoint && !isMobilePage) {
        window.location.href = "mobile.html";
    } else if (currentWidth >= mobileBreakpoint && !isDesktopPage) {
        window.location.href = "desktop.html";
    }

    window.onresize = checkWindowSize;
}