'use strict';

var glob = require('glob'),
    _ = require('lodash'),
    path = require('path'),
    Sequelize = require('sequelize');

module.exports = function(sequelize){
    var db = {};
    ///var user = 
    glob(path.join(__dirname,'./*.model.js'), {sync: true}, function(err, files){
        _.forEach(files, function(n, key){
            var model = sequelize.import(n);
            db[model.name] = model;
        });
    });
    return db;
};