const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let galleryImages = [];
let currentIndex = 0;

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const galleryName = card.getAttribute('data-gallery');
    const totalImages = 5; // Adjust based on how many images per car

    galleryImages = [];
    for (let i = 1; i <= totalImages; i++) {
      galleryImages.push(`images/cars/${galleryName}/${i}.jpg`);
    }

    currentIndex = 0;
    lightboxImg.src = galleryImages[currentIndex];
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= galleryImages.length) {
    lightbox.style.display = 'none';
  } else {
    lightboxImg.src = galleryImages[currentIndex];
  }
});
