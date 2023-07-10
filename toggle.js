function toggleTheme() {
  var stylesheet = document.getElementById('stylesheet');
  var themeButton = document.getElementById('themeButton');

  if (stylesheet.getAttribute('href') === '/css/dark.css') {
    stylesheet.setAttribute('href', '/css/light.css');
    themeButton.textContent = 'dark';

  } else {
    stylesheet.setAttribute('href', '/css/dark.css');
    themeButton.textContent = 'light';

  }
}
