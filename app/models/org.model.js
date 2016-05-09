'use strict';
var Sequelize = require('sequelize'),
    path = require('path'),
    winston = require('winston');
    
module.exports = function(sequelize){
     var Org = sequelize.define('Organization',{
         orgName:{
             type: Sequelize.STRING,
             field: 'org_name' 
        },
        clientId:{
            type:Sequelize.INTEGER,
             field: 'client_id' 
        }
     },{
         freezeTableName: true
     });
     return Org;
};