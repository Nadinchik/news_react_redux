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
        tags: data.tags
      });
      newPost.save(function (err) {
        if (err) return next(err);
        Post.find({ idUser }, function (error, posts) {
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

const getUser = (req, res) => {
  const { id } = req.params;
  User.findById(id, function (error, user) {
    if (user) {
      return res.status(200).send({ user });
    }
    return res.status(400).send('User don`t find');
  });
};


const getUserData = (req, res) => {
  const { idUser } = req.params;
  User.findById(idUser, function (error, user) {
      if (user) {
        const data = {
          username: user.username,
          fullName: user.fullName,
        };
        res.send({ user: data });
      }
      if (error) {
        res.status(500).send('Error!');
      }
    },
  );
};

// const deletePost = (req, res) => {
//   const id = req.params;
//   Post.findByIdAndRemove(id, function (error) {
//     if (error) return res.send('Post do not deleted');
//     res.send('Post delete');
//   });
// };
//
// const editPost = (req, res) => {
//   const id = req.params;
//   Post.findOneAndUpdate({ _id: id }, {
//     title: req.body.title,
//     text: req.body.text,
//   }, function (error, post) {
//     if (error) return res.send('Post do not edited');
//     res.send({ post });
//   });
// };

module.exports = {
  addPost,
  getUserData,
  getUser,
  // deletePost,
  // editPost,
};
