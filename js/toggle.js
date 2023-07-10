function toggleTheme() {

  var stylesheet = document.getElementById('stylesheet');

  if (stylesheet.getAttribute('href') === '/dark.css') {

    // update stylesheet
    stylesheet.setAttribute('href', '/light.css');
    // store theme
    localStorage.setItem('stylesheet', '/light.css');

  } else {

    // update stylesheet
    stylesheet.setAttribute('href', '/dark.css');
    // store theme
    localStorage.setItem('stylesheet', '/dark.css');

  }
}

window.addEventListener('load', function() {

  // get stored style
  var storedStyle = localStorage.getItem('stylesheet');
  var stylesheet = document.getElementById('stylesheet');

  if (storedStyle) {
    stylesheet.setAttribute('href', storedStyle);
  }
});
