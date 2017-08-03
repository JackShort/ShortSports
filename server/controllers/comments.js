const Post = require('../models').Post;
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
    },

    update(req, res) {
        return Comment
            .find({
                where: {
                    id: req.params.commentId,
                    postId: req.params.postId
                }
            })
            .then(comment => {
                if (!comment) {
                    return res.status(404).send({
                        message: "Comment Not Found"
                    });
                }

                return comment
                    .update(req.body, {fields: Object.keys(req.body)})
                    .then(() => res.status(200).send(comment))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return Comment
            .find({
                where: {
                    id: req.params.commentId,
                    postId: req.params.postId
                }
            })
            .then(comment => {
                if (!comment) {
                    return res.status(404).send({
                        message: "Comment Not Found"
                    });
                }

                return comment
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Comment Deleted"
                    }))
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    }
};
