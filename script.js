/* =========================
   DARK MODE
========================= */

const darkModeToggle = document.getElementById("darkModeToggle");
const siteLogo = document.getElementById("site-logo");

if (darkModeToggle) {
  /* Check saved preference */

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";

    if (siteLogo) {
      siteLogo.src = "images/logo-dark.png";
    }
  }

  /* Toggle dark mode */

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.textContent = "☀️";

      if (siteLogo) {
        siteLogo.src = "images/logo-dark.png";
      }
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.textContent = "🌙";

      if (siteLogo) {
        siteLogo.src = "images/logo-light.png";
      }
    }
  });
}

/* =========================
   CLEAR APPOINTMENT FORM
========================= */

window.addEventListener("pageshow", function () {
  const form = document.querySelector("#contact form");

  if (form) {
    form.reset();
  }
});
