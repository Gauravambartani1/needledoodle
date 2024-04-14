const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  let img = new Image();
  img.onload = function () {
    let imgWidth = this.width;
    let imgHeight = this.height;
    let aspectRatio = imgWidth / imgHeight;

    // Set the image dimensions based on aspect ratio
    if (aspectRatio > 1) {
      // Landscape image
      imageView.style.backgroundSize = "cover";
    } else {
      // Portrait image
      imageView.style.backgroundSize = "auto 100%";
    }

    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
  };
  img.src = imgLink;
}

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
