'use strict';
/**
 * Module dependencies. -vfrom page
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	// mongoose = require('mongoose'),
    Sequelize = require('sequelize'),
    winston = require('winston'),
	chalk = require('chalk');

/** 
 * Main application entry file.
 * Please note that the order of loading is important.
 */ 
winston.add(winston.transports.File, {filename: 'myapp.log'});
winston.remove(winston.transports.Console);

// Bootstrap db connection
// var db = mongoose.connect(config.db.uri, config.db.options, function(err) {
// 	if (err) {
// 		console.error(chalk.red('Could not connect to MongoDB!'));
// 		console.log(chalk.red(err));
// 	}
// });
// require('./app/mongo_models/user.server.model.js');
// require('./app/mongo_models/article.server.model.js');

// mongoose.connection.on('error', function(err) {
// 	console.error(chalk.red('MongoDB connection error: ' + err));
// 	process.exit(-1);
// 	}
// );

var sequelize = new Sequelize('mydb', 'acdev', 'acdev', {
    host: 'localhost',
    dialect: 'mysql' 
});
// Init the express application
var app = require('./config/express')(db);

//require('./app/mysql_models/my-users.model.js')(sequelize);
require('.//app/mysql_models/index.js')(sequelize);
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
