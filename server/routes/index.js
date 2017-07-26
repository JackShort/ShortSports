var express = require('express');
var router = express.Router();

const postsController = require('../controllers').posts;
const commentsController = require('../controllers').comments;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', (req, res) => res.status(200).send({
    message: 'welcome to the api'
}));

router.post('/api/posts', postsController.create);
router.get('/api/posts', postsController.list);
router.get('/api/posts/:postId', postsController.retrieve);

router.post('/api/posts/:postId/comments', commentsController.create);

module.exports = router;
