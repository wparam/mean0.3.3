'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize){
    var User = sequelize.define('User', {
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'last_name'
        },
        email:{
            type: Sequelize.STRING
        },
        username:{
            type: Sequelize.STRING,
            field: 'user_name'
        },
        password:{
            type: Sequelize.STRING,
            set: function(val){
                
            }
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods:{
            bind: function(models){
                User.belongsTo(models.Organization);
            }
        }
    });
    //User.sync({force: true});
    return User;
};
//User belongs to Org
