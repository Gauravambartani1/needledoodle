document.addEventListener("DOMContentLoaded", function () {
  // JavaScript
  function changeColor(button) {
    // Reset all buttons to default style
    const buttons = document.querySelectorAll(".color-options button");
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    // Set the clicked button's style
    button.style.backgroundColor = "black";
    button.style.color = "white";
  }

  // Image slider functionality
  const slider = document.querySelector(".image-slider");
  const imageContainer = slider.querySelector(".image-container");
  const prevButton = slider.querySelector(".prev-slide");
  const nextButton = slider.querySelector(".next-slide");
  const images = imageContainer.querySelectorAll("img");
  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    scrollToImage(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    scrollToImage(currentIndex);
  });

  function scrollToImage(index) {
    const scrollAmount = images[index].offsetLeft;
    imageContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
});
