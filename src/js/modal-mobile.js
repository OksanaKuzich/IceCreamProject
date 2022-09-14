const refs = {
  openModalBtn: document.querySelector('[data-modal-open-mobile]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('#body'),
};

refs.openModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
