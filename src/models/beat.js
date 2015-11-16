/**
 * beat.js
 * Model file for the hearbeat
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */
var mongoose = require('mongoose');


// define the schema
var schema = mongoose.Schema({
    user: { type: String, ref: 'User' },
    to: { type: String, trim: true },
    text: { type: String, trim: true, validate: validateText },
    date: { type: Date, default: Date.now}
})

function validateText (str) {
  return str.length < 250;
}

// compile the model
var Beat = mongoose.model('Beat', schema,'beats');


module.exports = Beat;
