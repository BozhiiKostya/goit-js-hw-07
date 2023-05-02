import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const mapGalleItem = galleryItems
  .map((element) => {
    return `<li class = "gallery__item">
    <a class = "gallery__link" href = "${element.original}">
        <img 
            class = "gallery__image" 
            src = "${element.preview}"
            alt = "${element.description}"
        />
    </a>
</li>`;
  })
  .join("");

galleryEl.innerHTML = mapGalleItem;

new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: "250",
});
