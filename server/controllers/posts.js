const Post = require('../models').Post;
const Comment = require('../models').Comment;

module.exports = {
    create(req, res) {
        return Post
            .create({
                title: req.body.title
            })
            .then(post => res.status(201).send(post))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Post
            .findAll({
                include: [{
                    model: Comment,
                    as: 'comments'
                }]
            })
            .then(posts => res.status(200).send(posts))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Post
            .findById(req.params.postId, {
                include: [{
                    model: Comment,
                    as: 'comments'
                }]
            })
            .then(post => {
                if(!post) {
                    return res.status(404).send({
                        message: 'Post not found'
                    });
                }

                return res.status(200).send(post);
            })
            .catch(error => res.status(400).send(error));
    }
};
