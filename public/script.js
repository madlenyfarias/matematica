// script.js

document.addEventListener('DOMContentLoaded', () => {
    // O Bootstrap já gerencia o carrossel via atributos data-bs-*
    // Aqui, adicionamos navegação pelo teclado para acessibilidade
  
    const carousel = document.querySelector('#carouselExample');
    if (!carousel) return;
  
    // Navegação pelo teclado (setas esquerda/direita)
    carousel.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        bootstrap.Carousel.getInstance(carousel).next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        bootstrap.Carousel.getInstance(carousel).prev();
      }
    });
  
    // Deixa o carrossel focável para permitir navegação via teclado
    carousel.setAttribute('tabindex', '0');
  
    // Foco nos links das imagens, para navegação por teclado
    const links = carousel.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('focus', () => {
        // Faz o slide atual para o slide da imagem focada
        const carouselInstance = bootstrap.Carousel.getInstance(carousel);
        const items = Array.from(carousel.querySelectorAll('.carousel-item'));
        const index = items.findIndex(item => item.contains(link));
        if (index !== -1) carouselInstance.to(index);
      });
    });
  });
  