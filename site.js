(function () {
  var hamburger = document.querySelector('.hamburger');
  var aside = document.querySelector('.site-aside');
  var overlay = document.querySelector('.nav-overlay');
  if (hamburger && aside && overlay) {
    hamburger.addEventListener('click', function () {
      aside.classList.toggle('open');
      overlay.classList.toggle('open');
    });
    overlay.addEventListener('click', function () {
      aside.classList.remove('open');
      overlay.classList.remove('open');
    });
  }
})();
