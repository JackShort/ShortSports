const Comment = require('../models').Comment;

module.exports = {
    create(req, res) {
        return Comment
            .create({
                content: req.body.content,
                postId: req.params.postId
            })
            .then(comment => res.status(201).send(comment))
            .catch(error => res.status(400).send(error));
    }
};
