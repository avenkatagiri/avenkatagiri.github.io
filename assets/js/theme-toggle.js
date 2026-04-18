document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");

  // Check LocalStorage
  const getPreferredTheme = () => {
    return localStorage.getItem("theme");
  };

  const setTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark");
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
    } else {
      body.classList.remove("dark");
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
    }
  };

  // Initialize
  const preferred = getPreferredTheme();
  // Default to dark mode if none is set, or respect user preference
  if (preferred === "dark" || !preferred) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  // Use Anime.js for an elegant icon toggle animation
  toggleBtn.addEventListener("click", () => {
    let isDark = body.classList.contains("dark");
    let newTheme = isDark ? "light" : "dark";
    
    // Quick pop animation
    if (typeof anime !== 'undefined') {
      anime({
        targets: toggleBtn,
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutElastic(1, .5)'
      });
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
