'use strict';

/**
 * Module dependencies.
 */

var winston = require('winston');
var config = require('./config');
var fs = require('fs');

/**
 * Module init function.
 */

//http://tostring.it/2014/06/23/advanced-logging-with-nodejs/
function Logger(){
    var logger = new (winston.Logger)({
        transports: [
        new (winston.transports.Console)({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        }),
        new (winston.transports.File)({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false 
        })
        ],
        exitOnError: false
    });
}
module.exports = {
    getLogger : Logger,

	getLogFormat: function() {
		return config.log.format;
	},

	getLogOptions: function() {
		var options = {};

		try {
			if ('stream' in config.log.options) {
				options = {
					stream: fs.createWriteStream(process.cwd() + '/' + config.log.options.stream, {flags: 'a'})
				};
			}
		} catch (e) {
			options = {};
		}

		return options;
	}

};
