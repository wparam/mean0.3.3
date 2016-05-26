'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	User = require('../app/models').User,
	chalk = require('chalk'),
	path = require('path'),
	config = require('./config');

/**
 * Module init function.
 */
module.exports = function() {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
		console.log(chalk.green('~~in serialize user~~~'));
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id, done) {
		console.log(chalk.yellow('~~in deserialize user~~~'));
		User.findById(id).then(function( user) {
			done(null, user);
		});
	});

	// Initialize strategies
	config.getGlobbedFiles('./config/strategies/**/*.js').forEach(function(strategy) {
		require(path.resolve(strategy))();
	});
};
