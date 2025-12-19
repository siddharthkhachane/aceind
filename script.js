function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out. We will contact you shortly.");
    this.reset();
});
