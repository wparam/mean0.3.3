'use strict';
var Sequelize = require('sequelize');
const hmac = require('crypto').createHmac('sha256', 'meanjs');

module.exports = function(sequelize){
    console.log('~~in user module~~');
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
                //this function got called anywhere the instance is setting password
                console.log('~~~hit~~~set~~password~~~');
                if(val){
                    hmac.update(val);
                    this.setDataValue('password', hmac.digest('hex'));
                }
                
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
