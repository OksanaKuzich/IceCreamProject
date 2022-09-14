const readMoreBtn = document.querySelector('.btn-arrow');
const text = document.querySelector('.hero__descr');

readMoreBtn.addEventListener('click', () => {
  text.classList.toggle('show-more');
});
