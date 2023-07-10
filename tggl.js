function toggleTheme() {

  var stylesheet = document.getElementById('stylesheet');

  if (stylesheet.getAttribute('href') === '/drk.css') {

    // update stylesheet
    stylesheet.setAttribute('href', '/lght.css');
    // store theme
    localStorage.setItem('stylesheet', '/lght.css');

  } else {

    // update stylesheet
    stylesheet.setAttribute('href', '/drk.css');
    // store theme
    localStorage.setItem('stylesheet', '/drk.css');

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
