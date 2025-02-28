 document.addEventListener("DOMContentLoaded", function () {
            const container = document.querySelector(".container");
            const botaoCentral = document.querySelector(".botao-central");
            const carousel = document.querySelector(".carousel-images");
            let index = 0;
            
            setTimeout(() => {
                container.style.opacity = "1";
                container.style.transform = "translateY(0)";
            }, 500);
            
            setTimeout(() => {
                botaoCentral.style.opacity = "1";
                botaoCentral.style.transform = "translateY(0)";
            }, 1000);
            
            setInterval(() => {
                index = (index + 1) % 3;
                carousel.style.transform = `translateX(-${index * 100}%)`;
            }, 3000);
        });