var https = require('https');

function getAndPrintHTMLChunks(options) {


    https.get(options, function (response) {
     var output = '';
     response.setEncoding('UTF8');
     response.on('data', function(chunk) {
        output += chunk;
        console.log(output)
        });
    })
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  getAndPrintHTMLChunks(requestOptions);