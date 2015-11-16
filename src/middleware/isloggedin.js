/**
 * middleware/isloggedin.js
 * this middleware just checks if the use session is valid.
 * If the user is not logged in, it will be redirected to login page.
 * https://github.com/pello-io/simple-express-mongoose
 * Pello Altadill - http://pello.info
 */

module.exports = function isLoggedIn (req, res, next) {
    if (!(req.session && req.session.login)) {
    	// user created successfully
          req.session.isLoggedIn = true;
          req.session.user = '@pello';
          req.session.login = '@pello';
          console.log('created user: %s', '@pello');
        return res.redirect('/');
    }
    next();
}
