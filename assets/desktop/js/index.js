import { translations } from "./translations.js";

const mouseMove = document.getElementById("mousemove");
const aboutBtns = document.querySelectorAll(".about__btn");
const contentContainers = document.querySelectorAll("[data-content]");
const leasures = document.querySelectorAll("[data-leasure");
const leasuresImg = document.querySelectorAll('.leasures__img');
const skillItems = document.querySelectorAll('.skills__container');
const experienceItems = document.querySelectorAll('.item');

const lightP = document.querySelectorAll('.light-p');
const darkP = document.querySelectorAll('.dark-p');
const carouselBtns = document.querySelectorAll('.carousel__btn');
const titles = document.querySelectorAll('.portrait__container__title, .degrees__container__title, .project__title');

let currentIndex = 0;
let isToggled = false;
let currentLanguage = document.querySelector('.flag--selected').id === 'frFlag' ? 'fr' : 'en';

// Onload event
function openingAnimation() {
    headerJobs.classList.add('show');
    imgCenter.classList.add('show');
    imgLeft.classList.add('show');
    imgRight.classList.add('show');
}
function resetOpening() {
    imgLeft.classList.remove('show');
    imgRight.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("ALEJKh93YCxV2fZb7");

    openingAnimation();
});


// MouseMove event
window.addEventListener("mousemove", (e) => {
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
});

// ----- ABOUT SECTION ----- //
// About-nav

// Animations

function setOpacityAndAddClass(element, opacity, className) {
    element.style.opacity = opacity;
    element.classList.add(className);
}

function aboutAnimations(target) {
    switch (target) {
        case 'portrait':
            setOpacityAndAddClass(portraitContainerA, 0, "animA");
            setOpacityAndAddClass(portraitContainerB, 0, "animB");
            break;
        case 'leasures':
            leasureDescription.style.opacity = 0;
            leasuresImg.forEach(item => {
                item.style.opacity = 0;
            });

            setTimeout(() => {
                setTimeout(() => {
                    leasureDescription.style.opacity = '1';
                }, 200);

                leasuresImg.forEach(item => {
                    item.style.opacity = "1";
                });

            }, 500);

            break;
        case 'skills':
            skillItems.forEach(item => {
                item.style.display = "none";
                item.classList.remove("anim");
            });

            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.display = "flex";
                    item.classList.add("anim");
                }, index * 100);
            });
            break;
        case 'degrees':
            setOpacityAndAddClass(degreesContainerA, 0, "animA");
            setOpacityAndAddClass(degreesContainerB, 0, "animB");
            break;
        default:
            null;
    }
}
// Buttons Events
aboutBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        aboutBtns.forEach(button => button.classList.remove("about__btn--selected"));
        btn.classList.add("about__btn--selected");

        contentContainers.forEach(container => container.style.display = "none");

        const target = btn.getAttribute("data-target");
        const targetContainer = document.querySelector(`[data-content="${target}"]`);
        if (targetContainer) {
            targetContainer.style.display = "flex";
        }

        aboutAnimations(target);
    });
});

// Leasures Event

leasures.forEach(leasure => {
    leasure.addEventListener('click', () => {
        const leasureType = leasure.getAttribute('data-leasure');
        let title = '';
        let text = '';

        leasures.forEach(button => button.classList.remove("leasures__img--selected"));
        leasure.classList.add("leasures__img--selected");

        switch (leasureType) {
            case 'sports':
                title = translations[currentLanguage].leasureTitleSports;
                text = `
                <p>${translations[currentLanguage].leasureTextSports1}</p>
                <p>${translations[currentLanguage].leasureTextSports2}</p>`;
                break;
            case 'code':
                title = translations[currentLanguage].leasureTitleCode;
                text = `
                <p>${translations[currentLanguage].leasureTextCode1}</p>
                <p>${translations[currentLanguage].leasureTextCode2}</p>`;
                break;
            case 'language':
                title = translations[currentLanguage].leasureTitleLanguage;
                text = `
                <p>${translations[currentLanguage].leasureTextLanguage1}</p>
                <p>${translations[currentLanguage].leasureTextLanguage2}</p>`;
                break;
            case 'piano':
                title = translations[currentLanguage].leasureTitlePiano;
                text = `
                <p>${translations[currentLanguage].leasureTextPiano1}</p>
                <p>${translations[currentLanguage].leasureTextPiano2}</p>`;
                break;
            case 'family':
                title = translations[currentLanguage].leasureTitleFamily;
                text = `
                <p>${translations[currentLanguage].leasureTextFamily1}</p>
                <p>${translations[currentLanguage].leasureTextFamily2}</p>`;
                break;
            case 'gamepad':
                title = translations[currentLanguage].leasureTitleGamepad;
                text = `
                <p>${translations[currentLanguage].leasureTextGamepad1}</p>
                <p>${translations[currentLanguage].leasureTextGamepad2}</p>`;
                break;
            default:
                title = 'Unknown';
                text = `<p>Unknown selection!</p>`;
        }

        leasureTitle.innerHTML = title;
        leasureText.innerHTML = text;
    });
});

// Experience carousel
function carouselDisplay(index) {

    experienceItems.forEach((item, i) => {
        if (i === currentIndex) {
            item.classList.add('item__visible');
        } else {
            item.classList.remove('item__visible');
        }
    });

    switch (index) {
        case 0:
            btnLeft.style.display = "none";
            break;
        case 1:
            btnLeft.style.display = "block";
            btnRight.style.display = "block";
            break;
        case 2:
            btnRight.style.display = "none";
            break;
        default: null;
    }
};

btnLeft.addEventListener("click", () => {
    currentIndex--;
    carouselDisplay(currentIndex);

});
btnRight.addEventListener("click", () => {
    currentIndex++;
    carouselDisplay(currentIndex);

});

// Form event

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const subjectValue = subjectInput.value;
    const messageValue = messageInput.value;

    emailjs.send("service_clx24le", "template_1631ujp", {
        from_email: emailValue,
        from_name: nameValue,
        from_subject: subjectValue,
        from_message: messageValue
    })
        .then(function (response) {
            // console.log("SUCCESS!", response.status, response.text);
            alert("E-mail envoyé avec succès");
        }, function (error) {
            // console.log("FAILED...", error);
            alert("Erreur lors de l'envoi de l'e-mail");
        });
});

// Theme toggle
function darkTheme() {
    bodyBg.style.opacity = '0';

    setTimeout(() => {
        titles.forEach(element => {
            element.style.backgroundColor = "#0a082e";
        });
        resetOpening();

        setTimeout(() => {
            themeToggle.style.justifyContent = 'end';
            iconLight.style.opacity = '0.2';
            iconDark.style.opacity = '1';

            body.style.backgroundColor = '#0a082e';
            bodyBg.style.backgroundImage = 'url(./assets/img/bg-dark.png)';
            bodyBg.style.opacity = '1';

            navBar.style.backgroundColor = '#f5f5f5';
            navBar.style.boxShadow = '#0a082e';

            headerSubline.style.backgroundImage = 'linear-gradient(to left, rgba(245, 245, 245, 0), rgba(245, 245, 245, 1) 20%, rgba(245, 245, 245, 1) 80%, rgba(245, 245, 245, 0))';

            carouselBtns.forEach(element => {
                element.style.color = '#f5f5f5';
            });
            lightP.forEach(element => {
                element.style.color = '#f5f5f5';
            });
            darkP.forEach(element => {
                element.style.color = '#0a082e';
            });

            openingAnimation()
        }, 10);
    }, 200);
};

function lightTheme() {
    bodyBg.style.opacity = '0';

    setTimeout(() => {
        titles.forEach(element => {
            element.style.backgroundColor = "#f5f5f5";
        });

        resetOpening();

        setTimeout(() => {
            themeToggle.style.justifyContent = 'start';
            iconLight.style.opacity = '1';
            iconDark.style.opacity = '0.2';

            body.style.backgroundColor = '#f5f5f5';
            bodyBg.style.backgroundImage = 'url(./assets/img/bg-light.png)';
            bodyBg.style.opacity = '1';

            navBar.style.backgroundColor = '#0a082e';
            navBar.style.boxShadow = '#f5f5f5';

            headerSubline.style.backgroundImage = 'linear-gradient(to left, rgba(10, 8, 46, 0), rgba(10, 8, 46, 1) 20%, rgba(10, 8, 46, 1) 80%, rgba(10, 8, 46, 0))';

            carouselBtns.forEach(element => {
                element.style.color = '#0a082e';
            });
            lightP.forEach(element => {
                element.style.color = '#0a082e';
            });
            darkP.forEach(element => {
                element.style.color = '#f5f5f5';
            });

            openingAnimation()
        }, 10);
    }, 200);
};

themeToggle.addEventListener("click", () => {
    isToggled = !isToggled;

    if (isToggled) {
        lightTheme();
    } else {
        darkTheme();
    }
})

function toggleLanguage() {
    if (currentLanguage === 'fr') {
        currentLanguage = 'uk';
    } else {
        currentLanguage = 'fr';
    }
    frFlag.classList.toggle('flag--selected');
    ukFlag.classList.toggle('flag--selected');
}

function updateLanguage() {
    let elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        let key = element.getAttribute('data-key');
        element.innerHTML = translations[currentLanguage][key];
    });
}

utilsFlag.addEventListener("click", () => {
    toggleLanguage();
    updateLanguage();
})

// Redirection

function checkWindowSize() {
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

checkWindowSize();

// Download CV

cvDownload.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "/assets/download/CV-CHARVOTMarc.pdf";
    link.download = "CV-CHARVOTMarc.pdf";
    link.click();
});