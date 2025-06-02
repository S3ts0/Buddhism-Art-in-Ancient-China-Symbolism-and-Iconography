document.addEventListener("DOMContentLoaded", function () {
  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links and pages
      navLinks.forEach((l) => l.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Show corresponding page
      const pageId = this.getAttribute("data-page");
      document.getElementById(pageId).classList.add("active");

      // Toggle body class for characters page
      if (pageId === "characters") {
        document.body.classList.add("characters-active");
      } else {
        document.body.classList.remove("characters-active");
      }
    });
  });

  // Animated button effect (if present on Home page)
  const animatedBtn = document.getElementById("animated-btn");
  if (animatedBtn) {
    animatedBtn.addEventListener("click", function () {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Whoosh!';
      this.style.transform = "scale(1.1)";

      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-check"></i> Magic Happened!';
        this.style.backgroundColor = "#4CAF50";
      }, 1000);

      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-magic"></i> Click Me Again!';
        this.style.backgroundColor = "";
        this.style.transform = "";
      }, 3000);
    });
  }

  // Video button functionality (on Home page)
  const videoBtn = document.getElementById("video-btn");
  const videoContainer = document.getElementById("video-container");

  if (videoBtn) {
    videoBtn.addEventListener("click", function () {
      const isShowing = videoContainer.style.display === "block";
      videoContainer.style.display = isShowing ? "none" : "block";
      document.body.classList.toggle("video-playing", !isShowing);

      if (!isShowing) {
        // Pause video when hiding
        const iframe = videoContainer.querySelector("iframe");
        if (iframe) {
          iframe.src = iframe.src; // Reset to pause video
        }
      }
    });
  }

  // Explore button goes to characters page (if present)
  const exploreBtn = document.getElementById("explore-btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      document
        .querySelector('.nav-link[data-page="characters"]')
        .classList.add("active");
      document.getElementById("characters").classList.add("active");

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
