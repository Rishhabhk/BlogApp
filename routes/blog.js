const express = require("express");

const router = express.Router();


//import controller

const {createLike, unlikePost} = require("../controllers/LikeController")
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPost} = require("../controllers/PostController")

//mapping create
router.post("/likes/create", createLike);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts/all", getAllPost);
router.post("/likes/unlike", unlikePost);



//export
module.exports = router;