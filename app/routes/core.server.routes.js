'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.index);
    // app.use(function(req, res, next){
    //     console.log('Now in slash route');
    //     console.log(arguments.length);
        
    //     //next();
    //     req.kkk = 'ab';
    //     //res.end('/');
    //     //next();
    // });
    
    // app.use(function(req, res, next){
    //     var d = '';
    //     console.log(req.kkk);
    //     res.on('data', function(chunk){
    //         d+=chunk;
    //     });
    //     res.on('end', function(){
    //         console.log('end data');
    //         console.log(d);
    //     });
    //     console.log('Now in a route');
    //     console.log(arguments.length);
    //     next();
    //     // res.end('/a');
    // });
    
    // app.use(function(req, res, next){
    //     console.log('Now in ab route');
    //     console.log(arguments.length);
    //     res.end('/a/b');
    // });
};

