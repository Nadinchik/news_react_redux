let express = require('express');
let router = express.Router();
let post = require('../controllers/postControllers');

router.post(`/:idUser`, post.addPost);
router.get(`/:idUser`, post.getUsersPosts);
router.get(`/`, post.getAllPosts);

module.exports=router;