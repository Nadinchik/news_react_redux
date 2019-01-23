let mongoose = require('mongoose');
let db = require('../db/db');

let schema = new mongoose.Schema({
    idUser: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

let Post = mongoose.model('post', schema);

module.exports=Post;

