let express = require('express');
let router = express.Router();
let post = require('../controllers/postControllers');

router.post(`/news/:id`, post.addPost);
router.get(`/news/:id`, post.getUsersPosts);
router.get(`/news`, post.getAllPosts);

module.exports=router;