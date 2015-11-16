/**
 * routes/beat.js
 * The router for beat operations.
 * https://github.com/pxai/h.eartbe.at
 * Pello Altadill - http://pello.io
 */

var mongoose = require('mongoose');
var Beat = mongoose.model('Beat');
var isloggedin = require('../middleware/isloggedin');
var sanitize = require('../helpers/sanitize.js');


module.exports = function (app) {

     /**
     * get
     * GETs all beats
     */
    app.get('/api/beats/get/last', function (req, res) {
           Beat.find({}, {}, {sort: {date: -1}, limit: 10},
               function (err, result) {
                   if (err) { res.send('{"result":"error"}'); }
                    var formatted = { 'result' : 'ok', 'data':[]};
                    console.log(result);
                    result.forEach(function (elem, i) {
                        formatted.data.push(elem);          
                    });
          
                    res.send(formatted);
               });
         
    });
    
     /**
     * get
     * GETs one beats
     */
    app.get('/api/beat/get/:id', function (req, res) {
         var heartbeatId = req.params['id'];
           Beat.findOne({"_id": heartbeatId}, {}, {},
               function (err, result) {
                   if (err) { res.send('{"result":"error"}'); }
                    var formatted = { 'result' : 'ok', 'data': {}};
                    formatted.data = result;          
                    console.log(formatted);
                    res.send(formatted);
               });
         
    });
    
     /**
     * get
     * GETs beats from a date
     */
    app.get('/api/beats/get/previous/:previousDate', function (req, res) {
        var previousDate = req.param('previousDate');
          Beat.find({'date': {$lt : previousDate}}, {}, {sort: {date: -1}, limit: 10},
               function (err, result) {
                   if (err) { res.send('{"result":"error"}'); }
                    var formatted = { 'result' : 'ok', 'data':[]};
                    console.log(result);
                    result.forEach(function (elem, i) {
                        formatted.data.push(elem);          
                    });
                    res.send(formatted);
               });
    });
    
    /**
     * post a hearbeat!!
     */
    app.post('/api/beats/send/', function (req, res) {
         var beat = new Beat({
            fromUser: req.session.user,
            to: sanitize(req.body.to),
            text: sanitize(req.body.text)
        });
        console.log(beat);
        beat.validate(function (err) {
            if (err) {
                console.log(err);
                console.log('Validation error! : ' + String(err)) // ValidationError: The value of path `n` (4) is beneath the limit (10).
                res.send(' {"result": "error", "errors": err}');
            } else {
                beat.save(function (err, beat) {
                    if (err) { res.send('{"result":"error", "errors":"Not send"}'); }
                    console.log('Saving: ' + beat);
                    res.send({ 'result' : 'ok'});
                });
            }
        });

    });
  

}