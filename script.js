// Add an event listener to wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });