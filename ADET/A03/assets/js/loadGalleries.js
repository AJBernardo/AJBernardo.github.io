// GRID-GALLERY FOR LARGE SCREEN DEVICES
const galleries = document.getElementById('galleries');

let gridGallery = `<div class="row py-5 mt-5 grid-gallery">`;

for (let i = 1; i < 10; i++) {
    gridGallery += 
    `<div class="col-12 col-md-6 col-lg-4 mb-4">
        <img src="assets/img/gallery${i}.webp" alt="DedSec Gallery: Photo ${i}" class="gallery img-fluid">
    </div>
    `;
}

gridGallery += `</div>`;

galleries.innerHTML += gridGallery;

// CAROUSEL-GALLERY FOR MEDIUM TO SMALL SCREEN SIZES
let carouselGallery = `<div class="row py-5 carousel-gallery d-none">
                        <div class="col ">
                            <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade"
                                data-bs-ride="carousel">
                                <div class="carousel-inner">`;

for (let i = 1; i < 10; i++) {
    isActive = i === 1 ? "active" : "";
    carouselGallery += 
    `<div class="carousel-item ${isActive}">
        <img src="assets/img/gallery${i}.webp" class="img-fluid w-100"
            alt="DedSec Gallery: Photo ${i}">
    </div>
    `;
}                          

carouselGallery += `</div>
                </div>
            </div>
        </div>`;

galleries.innerHTML += carouselGallery;
                            
