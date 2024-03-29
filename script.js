document.addEventListener("DOMContentLoaded", function () {
  const accountButton = document.querySelector(".icons .action button");
  const accountDropdown = document.querySelector(".action ul");

  // Function to toggle dropdown visibility
  function toggleDropdown() {
    accountDropdown.classList.toggle("show");
  }

  // Event listener for account button click
  accountButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Preventing click event from propagating to document

    // Toggle dropdown visibility
    toggleDropdown();
  });

  // Close dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !accountDropdown.contains(event.target) &&
      !accountButton.contains(event.target)
    ) {
      accountDropdown.classList.remove("show");
    }
  });

  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    moveSlides();
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    moveSlides();
  }

  function moveSlides() {
    slides.forEach((slide, index) => {
      const moveAmount = (index - currentSlide) * 100; // % to move based on relative index
      slide.style.transform = `translateX(${moveAmount}%)`;
    });
  }

  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Initialize slide positions
  moveSlides();
});
