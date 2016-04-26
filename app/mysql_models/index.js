'use strict';

var Sequelize = require('sequelize'),
    winston = require('winston'),
    glob = require('glob');
module.exports = function(sequelize){
    console.log('hit');
    glob('./*.js', function(er, files){
        if(er){
            winston.error(er);        
        }
        for(var i=0; i<files.length; i++){
            winston.log('using file:'+ files[i]);
            require(files[i])(sequelize);
        }
    });
};