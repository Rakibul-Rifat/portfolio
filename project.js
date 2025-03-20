const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden'); // Toggle the visibility of the menu
});

    var options = {
      // delay the animation sequence until '100' pixels have come into view
      animateThreshold: 100,
  // The frequency of which the user scrolling is 'tested'.
 scrollPollInterval: 20
  }
  $('.aniview').AniView(options);
