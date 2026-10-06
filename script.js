document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  const backToTop = document.getElementById("backToTop");

  // Interactive feature 1: theme switching using localStorage
  const savedTheme = localStorage.getItem("rasagnya-theme") || "light";
  root.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("rasagnya-theme", next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeIcon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  }

  // Interactive feature 2: contact form validation
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll("input, textarea")];
    let valid = true;

    fields.forEach(field => {
      field.classList.remove("is-invalid");
      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        valid = false;
      }
    });

    formMessage.className = "alert";
    if (!valid) {
      formMessage.classList.add("alert-danger");
      formMessage.textContent = "Please correct the highlighted fields and try again.";
      formMessage.classList.remove("d-none");
      return;
    }

    formMessage.classList.add("alert-success");
    formMessage.textContent = "Message validated successfully! This demo form is ready for backend integration.";
    formMessage.classList.remove("d-none");
    form.reset();
  });

  // Interactive feature 3: back-to-top
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile navigation closes after selection
  document.querySelectorAll("#mainNav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });
});
