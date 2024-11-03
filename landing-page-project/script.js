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

  // Highlight active section link in navbar while scrolling using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: `-${navbarHeight}px 0px 0px 0px`,
    threshold: 0.5 // Adjusted for more responsive highlighting
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const navLink = document.querySelector(`#navbar a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
});
