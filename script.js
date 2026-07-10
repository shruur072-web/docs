document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Duplicate the ticker track content once so the CSS scroll animation loops seamlessly.
  var track = document.querySelector('.ticker-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }
});
