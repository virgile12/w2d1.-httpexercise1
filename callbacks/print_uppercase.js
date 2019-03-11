

var httpFunctions = require('../http_functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTML (html) {
    console.log(html.toUpperCase());
  }

httpFunctions.getHTML(requestOptions, printHTML);
  