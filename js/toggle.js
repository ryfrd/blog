function toggleTheme() {

  var stylesheet = document.getElementById('stylesheet');

  if (stylesheet.getAttribute('href') === '/css/dark.css') {

    // update stylesheet
    stylesheet.setAttribute('href', '/css/light.css');
    // store theme
    localStorage.setItem('stylesheet', '/css/light.css');

  } else {

    // update stylesheet
    stylesheet.setAttribute('href', '/css/dark.css');
    // store theme
    localStorage.setItem('stylesheet', '/css/dark.css');

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
