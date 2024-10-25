// Select elements
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Build the navigation dynamically
sections.forEach(section => {
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navbar.appendChild(navItem);
});

// Add active class to section in view
function makeActive() {
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll(".menu__link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Attach the scroll event to highlight the section in view
document.addEventListener("scroll", makeActive);
