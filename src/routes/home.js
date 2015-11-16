/**
 * routes/home.js
 * The home page, just renders the jade tamplate
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */
var loggedIn = require('../middleware/isloggedin');
module.exports = function (app) {

    app.get('/', loggedIn, function(req, res) {
        res.redirect('index.html');
    });
}
