document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const itemWidth = carouselItems[0].clientWidth;
    let currentIndex = 0;

    // Move to the next slide
    function moveToNextSlide() {
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    // Move to the previous slide
    function moveToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        }
        updateCarousel();
    }

    // Update the carousel slide position
    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        carouselSlide.style.transform = `translateX(${offset}px)`;
    }

    // Auto-rotate the carousel every 5 seconds
    setInterval(moveToNextSlide, 5000);

    // Event listeners for manual navigation
    nextButton.addEventListener("click", moveToNextSlide);
    prevButton.addEventListener("click", moveToPrevSlide);
});
