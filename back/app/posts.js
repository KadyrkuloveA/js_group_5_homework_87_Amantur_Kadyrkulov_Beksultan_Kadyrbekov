const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const auth = require('../middleware/auth');

const config = require('../config');

const Post = require('../models/Post');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const items = await Post.find().sort({datetime: 1}).populate('user', `username`);
    res.send(items);
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Post.findById(req.params.id);

        if (!item) {
            return res.status(404).send({message: 'Not found'});
        }

        res.send(item);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
    const postData = req.body;
    const user = req.user;
    postData.user = user._id;

    if (req.file) {
        postData.image = req.file.filename;
    }

    if (!postData.description && !postData.image) {
        return res.status(400).send({message: "You might add description or image"});
    }

    const history = new Post(postData);

    try {
        await history.save();

        return res.send({message: "Successful saved to Posts"});
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;