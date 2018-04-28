var static = require('node-static');
var file = new static.Server('./build', { cache: 3600 });
require('http').createServer(function(request, response) {
    
    request.addListener('end', function() {
        file.serve(request, response, function(e, res) {
            if (e && (e.status === 404)) { // If the file wasn't found
                file.serveFile('/404.html', 404, {}, request, response);
            }
        });
    }).resume();

}).listen(process.env.PORT || 3000);