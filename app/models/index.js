'use strict';

var glob = require('glob'),
    _ = require('lodash'),
    path = require('path'),
    chalk = require('chalk'),
    Sequelize = require('sequelize');

module.exports = function(){
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
            console.dir(model);
            db[model.name] = model;
        });
    });
    // for(var i in db){
    //     if(db.hasOwnProperty(i) && db.bind){
    //         db.bind(db);
    //     }
    // }
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    return db;
};