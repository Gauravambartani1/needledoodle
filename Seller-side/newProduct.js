document.addEventListener("DOMContentLoaded", () => {
  const dropArea = document.querySelector(".left");
  const fileInput = document.querySelector("#fileInput");
  const imagePreview = document.querySelector(".left p");

  // Function to handle image preview
  function handleImagePreview(file) {
    const reader = new FileReader();

    reader.onload = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      img.style.width = "auto";
      img.style.height = "auto";

      img.onload = () => {
        imagePreview.innerHTML = ""; // Clear previous content
        imagePreview.appendChild(img);
      };
    };

    reader.readAsDataURL(file);
  }

  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("highlight");
  });

  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("highlight");
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("highlight");

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImagePreview(file);
    }
  });

  // Trigger file input when clicked on the drop area
  dropArea.addEventListener("click", () => {
    fileInput.click();
  });

  // Update image preview when a file is selected via file input
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImagePreview(file);
    }
  });
});
