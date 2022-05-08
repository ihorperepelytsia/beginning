"use strick";
import galleryItems from "./galery-items.js";

const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

gallery.addEventListener("click", handleClick);
lightbox.addEventListener("click", closeClickOverlay);

const markupGallery = (images) =>
  images.forEach((img) => {
    const createGalleryImg = `<li class="gallery__item">
    <a class="gallery__link" href="#">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" data-original="${img.original}"/>
    </a>
    </li>`;

    gallery.insertAdjacentHTML("beforeend", createGalleryImg);
  });

markupGallery(galleryItems);

function handleClick(e) {
  e.preventDefault();
  const target = e.target;
  lightbox.classList.add("is-open");
  lightboxImage.setAttribute("src", `${target.dataset.original}`);
  lightboxImage.setAttribute("alt", `${target.alt}`);
}
function closeModal() {
  lightbox.classList.remove("is-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.removeAttribute("alt");
}
function closeClickOverlay(e) {
  if (e.target.className === "lightbox__image") {
    return;
  }
  closeModal();
}
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
});

function changeImage(currentImage, keyCode) {
  const mapGalleryImgSrc = galleryItems.map((images) => images.original);
  const mapGalleryImgAlt = galleryItems.map((images) => images.description);
  for (let i = 0; i < mapGalleryImgSrc.length; i += 1) {
    if (mapGalleryImgSrc[i] === currentImage) {
      if (keyCode === "ArrowRight") {
        if (
          mapGalleryImgSrc[i] === mapGalleryImgSrc[mapGalleryImgSrc.length - 1]
        ) {
          return;
        }
        lightboxImage.src = mapGalleryImgSrc[i + 1];
        lightboxImage.alt = mapGalleryImgAlt[i + 1];
      }
      if (keyCode === "ArrowLeft") {
        if (mapGalleryImgSrc[i] === mapGalleryImgSrc[0]) {
          return;
        }
        lightboxImage.src = mapGalleryImgSrc[i - 1];
        lightboxImage.alt = mapGalleryImgAlt[i - 1];
      }
    }
  }
}

function passArg(e) {
  if (lightbox.classList.contains("is-open")) {
    if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
      changeImage(lightboxImage.src, e.code);
    }
  }
}

document.addEventListener("keydown", passArg.bind(galleryItems));
