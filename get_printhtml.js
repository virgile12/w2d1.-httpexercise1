var https = require('https');



function getAndPrintHTMLChunks() {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function (response) {
     var output = '';
     response.setEncoding('UTF8');
     response.on('data', function(chunk) {
        output += chunk;
        
        
   
        console.log(output)
        });
    })
}
  
getAndPrintHTMLChunks();