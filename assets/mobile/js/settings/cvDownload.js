export function cvDownloader() {
    cvDownload.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "https://pyxhd.github.io/Portfolio/assets/download/CV-CHARVOTMarc.pdf";
        link.download = "CV-CHARVOTMarc.pdf";
        link.click();
    });
}