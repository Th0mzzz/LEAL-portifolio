document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".arrow-btns .arrow:first-child");
    const nextButton = document.querySelector(".arrow-btns .arrow:last-child");
    const images = document.querySelectorAll(".carousel-item");

    if (!carouselImages || !prevButton || !nextButton || images.length === 0) return;

    let index = 0;
    const maxClicks = 1; // Limite de cliques para avançar ou retroceder
    const totalImages = images.length;

    function updateCarousel() {
        // Atualiza a posição do carousel
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        if (index < maxClicks) { // Permite avançar até o limite de cliques
            index++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (index > 0 && index <= maxClicks) { // Permite retroceder até o limite de cliques
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
    

    
});
