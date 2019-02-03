let express = require('express');
let router = express.Router();
let post = require('../controllers/profileControllers');

router.post(`/:idUser`,  post.addPost);
router.get(`/:idUser`, post.getUserData);
router.get(`/my/:id`, post.getUser);


module.exports=router;
