var express = require('express');

const postsController = require('../controllers').posts;
const commentsController = require('../controllers').comments;

module.exports = function(app, passport) {

    // ------------- Normal Routes -------------
    app.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

    app.get('/login', (req, res) => res.status(200).send ({
        message: 'welcome to the login page'
    }));

    app.get('/signup', (req, res) => res.status(200).send({
        message: 'welcome to the signup page'
    }));

    app.get('/api', (req, res) => res.status(200).send({
        message: 'welcome to the api'
    }));

    app.post('/api/posts', postsController.create);
    app.get('/api/posts', postsController.list);
    app.get('/api/posts/:postId', postsController.retrieve);
    app.put('/api/posts/:postId', postsController.update);
    app.delete('/api/posts/:postId', postsController.destroy);

    app.post('/api/posts/:postId/comments', commentsController.create);
    app.put('/api/posts/:postId/comments/:commentId', commentsController.update);
    app.delete('/api/posts/:postId/comments/:commentId', commentsController.destroy);

    // ------------- Authenticated Routes -------------
    app.post('/api/signup',
    passport.authenticate('local-signup'),
    function(req, res) {
      res.status(200).send();
    });

    // app.post('/api/signup', passport.authenticate('local-signup', {
    //     successRedirect: '/',
    //     failureRedirect: '/signup',
    //     failureFlash: true
    // }));

    app.post('/api/login',
    passport.authenticate('local-login'),
    function(req, res) {
      console.log(req.user.id);
      res.json({id: req.user.id})
    });

    app.post('/api/post',
    function(req, res) {
      if (req.user) {
        console.log("there is a user");
      } else {
        console.log("there is no user");
      }
    })

    // app.post('/api/login', passport.authenticate('local-login', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     failureFlash: true
    // }));
};
