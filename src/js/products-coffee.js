const readMoreBtn = document.querySelector('.btn-coffee');
const text = document.querySelector('.text-coffee');

readMoreBtn.addEventListener('click', () => {
  text.classList.toggle('show-more');
});