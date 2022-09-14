const readMoreBtn = document.querySelector('.btn-cream');
const text = document.querySelector('.text-cream');

readMoreBtn.addEventListener('click', () => {
  text.classList.toggle('show-more');
});