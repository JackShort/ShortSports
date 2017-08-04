var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models').User;

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id)
            .then(newUser => {
                if (!newUser) {
                    done(null, false);
                } else {
                    done(null, newUser);
                }
            }).catch(error => {
                done(null, error);
            });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password'
    },

    function(email, password, done) {

        User.findOne({
            where: {
                email: email
            }
        })
            .then(userFound => {
                if (userFound) {
                    return done(null, false, {message: 'That email is already taken.'});
                }

                User.create({
                    email: email,
                    password: User.generateHash(password)
                })
                    .then(newUser => {
                        return done(null, newUser);
                    })
                    .catch(error => {
                        return done(error);
                    });

            })
            .catch(error => {
                return done(error);
            });

    }));

};
