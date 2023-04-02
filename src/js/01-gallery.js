
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';


const galleryBoxRef = document.querySelector(".gallery");

const markupOfimageElements = createElementMarkup(galleryItems);

// створення розмітки динамічно

function createElementMarkup(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
return `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
`;
    }).join("");

}

// створення галереї з допомогою бібліотеки SimpleLightbox

 galleryBoxRef.insertAdjacentHTML('beforeend', markupOfimageElements)



 const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
  });


// const lightbox = new simplelightbox('.gallery a', { captionsData: "alt", captionDelay: 250,
//  captionPosition: "bottom"});
// console.log(lightbox);



//  let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// Do something…
// });