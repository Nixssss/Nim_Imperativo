let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const showAllBtn = document.querySelector('.show-all-btn');
let showAll = false; // Variável para rastrear o estado de exibição

// Função para mostrar a slide atual e esconder as demais
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

// Função para voltar para o slide anterior
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

// Função para alternar entre mostrar todas as slides e uma de cada vez
function toggleShowAll() {
    if (!showAll) {
        // Mostra todas as slides
        slides.forEach(slide => {
            slide.classList.add('active');
        });
        showAllBtn.textContent = "Mostrar um de cada vez"; // Atualiza o texto do botão
        currentSlide = slides.length; // Para navegação
    } else {
        // Volta a mostrar uma slide de cada vez
        currentSlide = 0; // Reinicia a partir da primeira slide
        showSlide(currentSlide);
        showAllBtn.textContent = "Mostrar Tudo"; // Atualiza o texto do botão
    }
    showAll = !showAll; // Alterna o estado
}

// Inicializa a apresentação mostrando a primeira slide
showSlide(currentSlide);
