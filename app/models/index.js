'use strict';

var glob = require('glob'),
    _ = require('lodash'),
    path = require('path'),
    chalk = require('chalk'),
    Sequelize = require('sequelize');

console.log(chalk.green('Init Sequelize DB'));
var sequelize = new Sequelize('mydb', 'acdev', 'acdev', {
    host: 'localhost',
    dialect: 'mysql' 
});

var db = {};
///var user = 
glob(path.join(__dirname,'./*.model.js'), {sync: true}, function(err, files){
    _.forEach(files, function(n, key){
        var model = sequelize.import(n);
        db[model.name] = model;
    });
});
Object.keys(db).forEach(function(model, index){
    if(db[model].bind){
        db[model].bind(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;