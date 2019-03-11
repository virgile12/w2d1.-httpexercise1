var https = require('https');

function getHTML (options, callback) {

     https.get(options, function (response) {
     var output = '';
     response.setEncoding('UTF8');
     response.on('data', function(chunk) {
        output += chunk;
        });
     response.on('end', function(){
         callback(output);
     })
    });

  
}
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML)
