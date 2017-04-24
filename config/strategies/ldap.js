'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
    config = require('../config'),
	LdapStrategy = require('passport-ldapauth'),
	User = require('mongoose').model('User');

module.exports = function() {
	// Use ldap strategy
    passport.use(new LdapStrategy({
        server: {
            url: config.ldap.url,
            bindDn: config.ldap.bindDn,
            bindCredentials: config.ldap.bindCredentials,
            searchBase: config.ldap.searchBase,
            searchFilter: config.ldap.searchFilter
        }
    }));
};
