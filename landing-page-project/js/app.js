// Smooth scrolling for navigation links
document.querySelectorAll(".menu__link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});
