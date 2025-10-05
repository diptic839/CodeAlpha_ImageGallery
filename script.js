const filterButtons = document.querySelectorAll('.filter-buttons button');
const images = document.querySelectorAll('.gallery .image');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    images.forEach(image => {
      if (filterValue === 'all' || image.getAttribute('data-category') === filterValue) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const showLightbox = (index) => {
  lightbox.style.display = 'flex';
  updateLightboxImage(index);
};

const updateLightboxImage = (index) => {
  currentIndex = index;
  const imgSrc = images[currentIndex].querySelector('img').src;
  const imgAlt = images[currentIndex].querySelector('img').alt;
  lightboxImg.src = imgSrc;
  lightboxImg.alt = imgAlt;
};

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    showLightbox(index);
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightboxImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightboxImage(currentIndex);
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});


