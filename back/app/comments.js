const express = require('express');
const auth = require('../middleware/auth');

const Comment = require('../models/Comment');

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.post) {
        try {
            const items = await Comment.find({post: req.query.post});

            if (!items) {
                return res.status(404).send({message: 'Not found'});
            }

            res.send(items);
        } catch (e) {
            res.status(404).send({message: 'Not found'});
        }
    } else {
        const items = await Comment.find().sort({order: 1});
        res.send(items);
    }
});

router.post('/', auth, async (req, res) => {
    const commentData = req.body;
    const user = req.user;
    commentData.user = user._id;
    commentData.post = req.query.post;

    const comment = new Comment(commentData);

    try {
        await comment.save();

        return res.send({message: "Successful saved comment"});
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;