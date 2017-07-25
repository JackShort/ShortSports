var express = require('express');
var router = express.Router();

const postsController = require('../controllers').posts;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', (req, res) => res.status(200).send({
    message: 'welcome to the api'
}));

router.post('/api/posts', postsController.create);
router.get('/api/posts', postsController.list);

module.exports = router;
