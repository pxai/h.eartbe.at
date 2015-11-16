/**
 * models/index.js
 * All models are here to import all of them just with one command
 * in the main app.js, and by the way we connect to MongoDB
 * Better to use an external config.. I know.
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */
var mongoose = require('mongoose');
var config = require('config');
mongoose.connect(config.mongoUrl);

// optionally:
//mongoose.set('debug', true);

exports.Beat = require('./beat');
exports.User = require('./user');