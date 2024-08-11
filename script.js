AOS.init({
    duration: 1000, // duration of animation in milliseconds
    once: false // whether animation should happen only once - while scrolling down
  });


document.getElementById('mobileMenu').addEventListener('click', function() {
    var mobileDiv = document.getElementById('mobileDiv');
    if (mobileDiv.classList.contains('hidden')) {
        mobileDiv.classList.remove('hidden');
    } else {
        mobileDiv.classList.add('hidden');
    }
});





document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function autoplay() {
        changeSlide(1);
    }

    let slideInterval = setInterval(autoplay, 3000); // Change slide every 3 seconds

    // Optional: Pause autoplay on hover
    document.querySelector('.slider-container').addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    document.querySelector('.slider-container').addEventListener('mouseout', () => {
        slideInterval = setInterval(autoplay, 3000);
    });

    // Event listeners for next/prev buttons
    document.querySelector('.prev').addEventListener('click', () => {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        changeSlide(1);
    });
});
