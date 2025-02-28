document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".arrow-btns .arrow:first-child");
    const nextButton = document.querySelector(".arrow-btns .arrow:last-child");
    const images = document.querySelectorAll(".carousel-img");
    
    if (!carouselImages || !prevButton || !nextButton || images.length === 0) return;
    
    let index = 0;
    const totalImages = images.length;
    let interval;

    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${index * (100 / totalImages)}%)`;
    }

    function nextSlide() {
        index = (index + 1) % totalImages;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function startAutoSlide() {
        stopAutoSlide();
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    nextButton.addEventListener("click", () => {
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        startAutoSlide();
    });

    carouselImages.addEventListener("mouseenter", stopAutoSlide);
    carouselImages.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
});
