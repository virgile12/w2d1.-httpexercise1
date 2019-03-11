

var httpFunctions = require('../http_functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTML (html) {
    console.log(html.toLowerCase());
}

httpFunctions.getHTML(requestOptions, printHTML);




