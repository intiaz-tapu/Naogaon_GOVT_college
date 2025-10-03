
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('notice-search');
  const noticeItems = document.querySelectorAll('#notice-list .notice-item');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    noticeItems.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  });
});


 const seeMoreBtn = document.getElementById('seeMoreBtn');
  const noticeList = document.getElementById('notice-list');
  const notices = noticeList.querySelectorAll('.notice-item');
  const initiallyVisible = 3;

  // Hide notices after initiallyVisible
  for(let i = initiallyVisible; i < notices.length; i++) {
    notices[i].style.display = 'none';
  }

  seeMoreBtn.addEventListener('click', () => {
    // Show all hidden notices
    for(let i = initiallyVisible; i < notices.length; i++) {
      notices[i].style.display = 'list-item';
    }
    // Hide the button after expanding
    seeMoreBtn.style.display = 'none';
  });




const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-grid img");

// Open lightbox on image click
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

// Close lightbox when close button clicked
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Also close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});







