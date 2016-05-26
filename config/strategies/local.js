'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	User = require('../../app/models').User,
	LocalStrategy = require('passport-local').Strategy;
const hmac = require('crypto').createHmac('sha256', 'meanjs');

module.exports = function() {
	// Use local strategy
	passport.use(new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password'
		},
		function(username, password, done) {
			// User.findOne({
			// 	username: username
			// }, function(err, user) {
			// 	console.log(err);
			// 	console.log(user);
			// 	if (err) {
			// 		return done(err);
			// 	}
			// 	if (!user) {
			// 		return done(null, false, {
			// 			message: 'Unknown user or invalid password'
			// 		});
			// 	}
			// 	if (!user.authenticate(password)) {
			// 		return done(null, false, {
			// 			message: 'Unknown user or invalid password'
			// 		});
			// 	}

			// 	return done(null, user);
			// }, function(err){
			// 	console.log(err);
			// });
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
