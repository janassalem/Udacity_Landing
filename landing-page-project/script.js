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

  // Intersection Observer for active section highlighting
  const observerOptions = {
    root: null,
    rootMargin: `-${navbarHeight}px 0px 0px 0px`, // Offset for navbar height
    threshold: 0.6 // 60% of the section is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.getAttribute("id");
      const navbarLink = document.querySelector(`#navbar a[href="#${sectionId}"]`);

      if (entry.isIntersecting) {
        navbarLink.classList.add("active");
      } else {
        navbarLink.classList.remove("active");
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
  });
});
