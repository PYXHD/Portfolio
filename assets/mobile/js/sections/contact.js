export function formEvent() {
    emailjs.init("ALEJKh93YCxV2fZb7");

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
}