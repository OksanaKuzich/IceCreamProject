(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
    var halfcoords = coords / 3;

    if (scrolled > halfcoords) {
      goTopBtn.classList.add('back-to-top-show');
      // fixBurger.classList.add('burger-btn--absolute');
    }
    if (scrolled < halfcoords) {
      goTopBtn.classList.remove('back-to-top-show');
      // fixBurger.classList.remove('burger-btn--absolute');
    }
  }

  var goTopBtn = document.querySelector('.back-to-top');
  // var fixBurger = document.querySelector('.burger-btn');

  window.addEventListener('scroll', trackScroll);
})();
