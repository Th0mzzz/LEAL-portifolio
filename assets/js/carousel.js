document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".arrow-btns .arrow:first-child");
    const nextButton = document.querySelector(".arrow-btns .arrow:last-child");
    const images = document.querySelectorAll(".carousel-item");

    if (!carouselImages || !prevButton || !nextButton || images.length === 0) return;

    let index = 0;
    const totalImages = images.length;

    function updateCarousel() {
        // Garante que o índice está dentro dos limites
        if (index < 0) index = 0;
        if (index >= totalImages) index = totalImages - 1;

        // Atualiza a posição do carousel
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        if (index < totalImages - 1) { // Verifica se não está no último slide
            index++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (index > 0) { // Verifica se não está no primeiro slide
            index--;
            updateCarousel();
        }
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Opcional: Pausa o carousel ao passar o mouse
    carouselImages.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carouselImages.addEventListener("mouseleave", startAutoSlide);

    // Auto-slide opcional
    let autoSlide = setInterval(nextSlide, 5000);

    function startAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
    }
});
