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

       
   
    
   
};



  module.exports = { getHTML}