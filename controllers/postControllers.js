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


const getUsersPosts = (idUser, done) => {
  Post.find({ idUser }, function (user, posts, error) {
      if (user) {
        return done(user, posts, null);
      }
      if (error) {
        return done(error);
      }
    },
  );
};

const getAllPosts = (page, done) => {
  Post.find({})
    .limit(5)
    .exec(function (posts, error) {
      if (posts) {
        return done(posts, null);
      }
      if (error) {
        return done(error);
      }
    });
};

module.exports = {
  addPost,
  getUsersPosts,
  getAllPosts,
};
