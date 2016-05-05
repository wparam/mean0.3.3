'use strict';

var glob = require('glob'),
    _ = require('lodash'),
    path = require('path'),
    Sequelize = require('sequelize');

module.exports = function(sequelize){
    var db = {};
    glob(path.join(__dirname,'./*.model.js'), {sync: true}, function(err, files){
        _.forEach(files, function(n, key){
            var ob = require(n)(sequelize);
            console.log(ob);
        });
    });
    console.log('run index model');
};