const modelPost = require('../models/post_Model');
const Post = require('mongoose').model('post');
const model = require('../models/User_model');
const User = require('mongoose').model('users');

const addPost = (req, res) => {
  const { idUser } = req.params;
  const data = JSON.parse(req.body.data);
  User.findById(idUser, function (error, user) {
    if (user) {
      let newPost = new Post({
        idUser,
        title: data.title,
        text: data.text,
      });
      newPost.save(function (err) {
        if (err) return next(err);
        Post.find({ idUser })
          .limit(5)
          .exec(function (error, posts) {
            if (error) return next(error);
            res.send({ posts });
          });
      });
    }
    if (error) {
      res.status(500).send('Something broke!');
    }
  });
};


const getUsersPosts = (req, res) => {
  const { idUser } = req.params;
  Post.findbyId(idUser, function (error, posts) {
      if (user) {
        return res.send({posts});
      }
      if (error) {
        res.status(500).send('Cannot get posts!');
      }
    },
  );
};


const getAllPosts = (req, res) => {
  Post.find({})
    .limit(5)
    .exec(function (error, posts) {
      if (posts) {
        return res.status(200).send({posts})
      }
      if (error) {
        res.status(500).send('Errors');
      }
    });
};

module.exports = {
  addPost,
  getUsersPosts,
  getAllPosts,
};

