// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mobileNav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Contact form -> WhatsApp
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('mensaje').value;
      var text = 'Hola Alex, soy ' + nombre + ' (' + email + ').\n\n' + mensaje;
      window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
    });
  }
});
