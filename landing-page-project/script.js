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
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop >= 0 && sectionTop <= navbarHeight + 200) {
        document.querySelectorAll("#navbar a").forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
