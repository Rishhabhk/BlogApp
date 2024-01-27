//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req, res) => {
    try {

        //fetch data from body
        const { post, user, body } = req.body;

        //create commetn object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by the ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments") //populate the commetn array with the comment documents
            .exec();

        res.json({
            post: updatedPost
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "error while creating comment"
        })
    }

}
