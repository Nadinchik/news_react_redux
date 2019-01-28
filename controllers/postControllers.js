const modelPost = require('../models/post_Model');
const Post = require('mongoose').model('post');
const model = require('../models/User_model');
const User = require('mongoose').model('users');


const getUsersPosts = (req, res) => {
  const { idUser } = req.params;
  User.findById(idUser, function (error, user) {
      if (user) {
        Post.find({ idUser }, function (error, posts) {
          if (error) return res.send('Error!');
          res.send({ posts });
        });
      }
      if (error) {
        res.status(500).send('Error!');
      }
    },
  );
};


const getAllPosts = (req, res) => {
  let promise = Post.find((error, posts) => {
    if (error) {
      return res.send('Error! Cannot get posts!');
    }
    if (posts.length === 0) {
      return res.send({ posts });
    }
  });
  let dataList = [];
  promise.then(posts => {
    posts.forEach(async (item, index) => {
      await User.findById(item.idUser, (err, user) => {
        const data = {
          _id: item._id,
          idUser: item.idUser,
          title: item.title,
          text: item.text,
          date: item.date,
          author: user.username,
        };
        dataList.push(data);
      });

      return res.send({ posts: dataList });

    });
  });
};

module.exports = {
  getUsersPosts,
  getAllPosts,
};
