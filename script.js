// Hamburger menu click event handler
document.getElementById('hamburgerMenu').addEventListener('click', function () {
  var navLinks = document.getElementById('navLinks');
  if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
  } else {
      navLinks.style.display = 'flex';
  }
});
