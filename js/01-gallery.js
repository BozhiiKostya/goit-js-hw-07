import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const markupItemGallery = galleryItems
  .map((item) => {
    return `<li class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}">
        <img
            class = "gallery__image"
            src = "${item.preview}"
            data-source = "${item.original}"
            alt = "${item.description}"
        />
    </a>
</li>`;
  })
  .join("");

galleryEl.innerHTML = markupItemGallery;

galleryEl.addEventListener("click", onClickAllGallery);

function onClickAllGallery(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}"
     width="800" height="600">`);
  instance.show();

  window.addEventListener("keydown", onKeyDown);
  function onKeyDown(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
