'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize){
    var User = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        lastName: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });

    User.sync({force: false}).then(function () {
        // Table created
        return User.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });
};