

var httpFunctions = require('./http_functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
    console.log(html);
  }

  httpFunctions.getHTML(requestOptions, printHTML);