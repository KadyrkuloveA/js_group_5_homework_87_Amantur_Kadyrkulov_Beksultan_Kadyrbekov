const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    image: String,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;