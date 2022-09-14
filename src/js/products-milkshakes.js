const readMoreBtn = document.querySelector('.btn-milkshakes');
const text = document.querySelector('.text-milkshakes');

readMoreBtn.addEventListener('click', () => {
  text.classList.toggle('show-more');
});