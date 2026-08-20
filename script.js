/* =========================
   DARK MODE
========================= */

const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
  /* Check saved preference */

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  }

  /* Toggle dark mode */

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.textContent = "🌙";
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