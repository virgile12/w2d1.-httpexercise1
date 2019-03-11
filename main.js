var https = require('https');



function getAndPrintHTMLChunks() {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function (response) {

    response.on('data', function(chunk) {
            console.log('\n')
            console.log(chunk.toString())

        });


    })
}
  
getAndPrintHTMLChunks();

// var withBreaks = "Hello World. \n My name is Jennifer. \n What is your name?" 

// var callback = function(response) {
//     console.log('In response handler callback!');
  
//     response.on('data', function(chunk) {
//       console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
//       console.log(chunk.toString());
//     });
//   }
//   console.log("I'm about to make the request!");
  
//   https.request(options, callback).end();
  
//   console.log("I've made the request!");
