export function leftHander() {
    leftHanderBtn.addEventListener("click", () => {
        rightHanderBtn.classList.remove("handerSelected");
        leftHanderBtn.classList.add("handerSelected");

        burgerMenu.classList.replace("rightHanderBurger", "leftHanderBurger");

        settingsBtn.classList.replace("rightHanderSettings", "leftHanderSettings");
    })
}

export function rightHander() {
    rightHanderBtn.addEventListener("click", () => {
        leftHanderBtn.classList.remove("handerSelected");
        rightHanderBtn.classList.add("handerSelected");

        burgerMenu.classList.replace("leftHanderBurger", "rightHanderBurger");

        settingsBtn.classList.replace("leftHanderSettings", "rightHanderSettings");
    })
}