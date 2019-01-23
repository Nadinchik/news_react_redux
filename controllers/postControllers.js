let Post = require('../models/post_Model');
let model = require('../models/User_model');
const User = require('mongoose').model('users');

const addPost = (req,  res) => {
    const id = req.params.id;
    User.findOne({_id: id}, function(error, user) {
            if (user) {
                Post.save({
                    idUser: req.params._id,
                    title: req.body.title,
                    text: req.body.text,
                });
                return res.send(null, user);
            }
            if (error) {
                return res.send(error);
            }
        })
};


const getUsersPosts = (req, res) => {
    const id = req.params.id;
    User.findOne({_id:id}, function (error, posts) {
            if (req.user._id === _id) {
                return res.status(200).send(null, posts)
            }
            if (error) {
                return res.send(error)
            }
        }
    )
};

const getAllPosts = (req, res) => {
    Post.find({})
        .limit(5)
        .exec(function (error, posts) {
        if (posts) {
            return res.status(200).send(null, posts)
        }
        if (error) {
            return res.send(error)
        }
    })
};

module.exports = {
    addPost,
    getUsersPosts,
    getAllPosts
};
