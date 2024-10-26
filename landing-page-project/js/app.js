/**
 * Dynamically creates the navbar and enables smooth scrolling and active section highlighting.
 */

// Array of section names to dynamically build the navbar
const sections = [
    { id: 'section1', name: 'Section 1' },
    { id: 'section2', name: 'Section 2' },
    { id: 'section3', name: 'Section 3' },
    { id: 'section4', name: 'Section 4' }
  ];
  
  /**
   * Function to dynamically generate the navbar links
   */
  function createNavbar() {
    const navbar = document.querySelector('#navbar ul');
    sections.forEach(section => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${section.id}">${section.name}</a>`;
      navbar.appendChild(li);
    });
  }
  
  /**
   * Function to enable smooth scrolling for navbar links
   */
  function enableSmoothScroll() {
    document.querySelectorAll('#navbar a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
  
  /**
   * Function to highlight the navbar link for the section in view
   */
  function highlightActiveSection() {
    const navbarLinks = document.querySelectorAll('#navbar a');
  
    window.addEventListener('scroll', () => {
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        const position = element.getBoundingClientRect();
  
        if (position.top >= 0 && position.top < window.innerHeight / 2) {
          navbarLinks.forEach(link => link.classList.remove('active'));
          navbarLinks[index].classList.add('active');
        }
      });
    });
  }
  
  /**
   * Initialize the functions
   */
  createNavbar();
  enableSmoothScroll();
  highlightActiveSection();
  