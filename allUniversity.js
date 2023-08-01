//transicao via js
window.addEventListener('scroll', function() {
  const main = document.querySelector('.how_does_it_work');
  const sections = document.querySelectorAll('.how_does_it_work section');
  const position = main.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const shouldAnimate = position < windowHeight * 0.9;
  main.classList.toggle('fade-in-scroll', shouldAnimate);
  sections.forEach(section => {
    section.classList.toggle('fade-in-scroll', shouldAnimate);
  });
});

//accordion button
const accordionButtons = document.querySelectorAll('.accordion__button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    button.classList.toggle('accordion__button--active');
    if (button.classList.contains('accordion__button--active')) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    } else {
      accordionContent.style.maxHeight = '0';
    }
  });
});

//funcao para carregar o modal assim que abrir a pagina
document.addEventListener("DOMContentLoaded", function() {
  const modal = new bootstrap.Modal(document.getElementById('exampleModal1'));
  modal.show();
});
