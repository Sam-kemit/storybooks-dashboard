const { route } = require('.');

const express = require('express'),
passport = require('passport'), 
router = express.Router();

// @desc Auth with google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// @desc Google auth callback
// @route GET /atuh/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/dashboard');
});

// @desc Logout User
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;