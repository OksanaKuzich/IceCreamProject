(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-map-modal-open]'),
    closeModalBtn: document.querySelector('[data-map-modal-close]'),
    modal: document.querySelector('[data-map-modal]'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
