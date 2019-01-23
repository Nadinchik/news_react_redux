let Post = require('../models/post_Model');
let model = require('../models/User_model');
const User = require('mongoose').model('users');

const addPost = (req, idUser, done) => {
    console.log('idUser --->', idUser);
    User.findOne({idUser}, function(user, post, error) {
            if (user) {
                Post.save({
                    idUser: req.params.idUser,
                    title: req.body.title,
                    text: req.body.text,
                });
                return done(user, post, null);
            }
            if (error) {
                return done(error);
            }
        })
};


const getUsersPosts = (idUser, done) => {
    Post.find({idUser}, function (user, posts, error) {
            if (user) {
                return done(user, posts, null)
            }
            if (error) {
                return done(error)
            }
        }
    )
};

const getAllPosts = (page, done) => {
    Post.find({})
        .limit(5)
        .exec(function (posts, error) {
        if (posts) {
            return done(posts, null)
        }
        if (error) {
            return done(error)
        }
    })
};

module.exports = {
    addPost,
    getUsersPosts,
    getAllPosts
};
