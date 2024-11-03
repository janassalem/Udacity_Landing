// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navbarList = document.getElementById("navbar-list");
  const navbarHeight = document.getElementById("navbar").offsetHeight;

  // Dynamically build the navbar
  sections.forEach(section => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${section.id}`;
    link.textContent = section.id.replace("section", "Section ");
    listItem.appendChild(link);
    navbarList.appendChild(listItem);
  });

  // Smooth scroll with offset for navbar height
  document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));

      window.scrollTo({
        top: targetSection.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    });
  });

  // Highlight active section link in navbar while scrolling
  const highlightActiveSection = () => {
    let currentSection = null;

    sections.forEach(section => {
      const sectionPosition = section.getBoundingClientRect();

      // Check if the section is in the viewport (top within view)
      if (sectionPosition.top <= navbarHeight && sectionPosition.bottom > navbarHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Apply active class to the corresponding navbar link
    document.querySelectorAll("#navbar a").forEach(link => {
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", highlightActiveSection);
});
