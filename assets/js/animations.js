document.addEventListener("DOMContentLoaded", () => {
  // Only run animations if Anime.js is loaded
  if (typeof anime === 'undefined') return;

  // Stagger animate all elements with the class 'glass'
  anime({
    targets: '.glass',
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(150, {start: 300}),
    duration: 800,
    easing: 'easeOutQuart'
  });

  // Hero section entrance animation
  anime({
    targets: '.hero, .profile-bio, .hero img, .hero h1, .hero p, .hero a',
    translateY: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 800,
    easing: 'easeOutQuart'
  });
});
