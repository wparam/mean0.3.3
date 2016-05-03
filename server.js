'use strict';
/**
 * Module dependencies. -vfrom page
 */
var init = require('./config/init')(),
	config = require('./config/config'),
    Sequelize = require('sequelize'),
    winston = require('winston'),
	chalk = require('chalk');

/** 
 * Main application entry file.
 * Please note that the order of loading is important.
 */ 
winston.add(winston.transports.File, {filename: 'myapp.log'});
winston.remove(winston.transports.Console);

var sequelize = new Sequelize('mydb', 'acdev', 'acdev', {
    host: 'localhost',
    dialect: 'mysql' 
});
// Init the express application
var app = require('./config/express')(sequelize);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('--');
console.log(chalk.green(config.app.title + ' application started'));
console.log(chalk.green('Environment:\t\t\t' + process.env.NODE_ENV));
console.log(chalk.green('Port:\t\t\t\t' + config.port));
console.log(chalk.green('Database:\t\t\t' + config.db.uri));
if (process.env.NODE_ENV === 'secure') {
	console.log(chalk.green('HTTPs:\t\t\t\ton'));
}
console.log('--');
