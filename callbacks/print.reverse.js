
var httpFunctions = require('../http_functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
   console.log(html.split('').reverse().join(''));
};

httpFunctions.getHTML(requestOptions, printHTML);
  