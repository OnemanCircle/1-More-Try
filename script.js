// Lightbox Handling for Multiple Images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let galleryImages = [];
let currentIndex = 0;

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const galleryName = card.getAttribute('data-gallery');
    const totalImages = 3; // Adjust this to the total number of images per gallery

    // Clear previous images
    galleryImages = [];

    // Load images from the respective folder
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

// Scroll Animation
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
