var Sequelize = require('sequelize'),
    path = require('path'),
    winston = require('winston');
    
module.exports = function(sequelize){
     return  sequelize.define('Organization',{
         name: Sequelize.STRING,
         clientId: Sequelize.INTEGER
     });
};