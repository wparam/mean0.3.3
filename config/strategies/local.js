'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	User = require('../../app/models').User,
	chalk = require('chalk'),
	LocalStrategy = require('passport-local').Strategy;
const hmac = require('crypto').createHmac('sha256', 'meanjs');

module.exports = function() {
	// Use local strategy
	passport.use(new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password'
		},
		function(username, password, done) {
			console.log(chalk.green('~~in verify user in local~~~'));
			hmac.update(password);
			User.findOne({
				username: username,
				password: hmac.digest('hex')
			}).then(function( user) {
				if (!user) {
					return done(null, false, {
						message: 'Unknown user or invalid password'
					});
				}
				return done(null, user);
			});
		}
	));
};
