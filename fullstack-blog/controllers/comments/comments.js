const appErr = require("../../utils/appErr");
const Comment = require("../../model/comment/Comment");
const Post = require("../../model/post/Post");
const User = require("../../model/user/User");
const createCommentCtrl = async (req, res, next) => {
  const { message } = req.body;
  try {
    //Find the Post
    const post = await Post.findById(req.params.id);
    //Create the comment
    const comment = await Comment.create({
      user: req.session.userAuth,
      message,
    });
    // push the comment to post
    post.comments.push(comment._id);
    //find the user
    const user = await User.findById(req.session.userAuth);
    //push the comment into
    user.comments.push(comment._id);
    //disable validation
    //save
    await post.save({ validationBeforeSave: false });
    await user.save({ validationBeforeSave: false });
    res.json({
      status: "success",
      data: comment,
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

const fetchCommentsCtrl = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      user: "Comments list",
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

const fetchCommentCtrl = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      user: "Comments details",
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

const deleteCommentCtrl = async (req, res, next) => {
  try {
    //find the post
    const comment = await Comment.findById(req.params.id);
    //check if the post belongs to the user
    if (comment.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to delete the comment", 403));
    }
    //delete post
    await Comment.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      user: "Comment has been deleted successfully",
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

const updateCommentCtrl = async (req, res, next) => {
  try {
    //find the comment
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return next(appErr(error.message));
    }
    //check if the post belongs to the user
    if (comment.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to update this comment", 403));
    }
    //update
    const commentUpdated = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        message: req.body.message,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "success",
      data: commentUpdated,
    });
  } catch (error) {
    next(appErr(error.message));
  }
};
module.exports = {
  createCommentCtrl,
  fetchCommentsCtrl,
  fetchCommentCtrl,
  deleteCommentCtrl,
  updateCommentCtrl,
};
