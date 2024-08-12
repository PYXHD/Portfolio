import { allDetails } from "../variables.js";

export function showMeDetails() {

    allDetails.forEach(detail => {
        detail.addEventListener("click", (e) => {
            const targetDetail = e.currentTarget;
            const description = targetDetail.querySelector(".detail__description");
            const experience = targetDetail.querySelector(".detail__exp")

            if (description) {
                description.classList.toggle("visible");
            }
            if (experience) {
                experience.classList.toggle("visible")
            }
        })
    });
}