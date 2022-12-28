const carousel = document.querySelector('.carousel');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', () => {
  carousel.scrollLeft -= 300;
});

rightButton.addEventListener('click', () => {
  carousel.scrollLeft += 300;
});