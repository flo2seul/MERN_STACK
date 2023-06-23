const express = require("express");
const {
  createCommentCtrl,
  fetchCommentsCtrl,
  fetchCommentCtrl,
  deleteCommentCtrl,
  updateCommentCtrl,
} = require("../../controllers/comments/comments");
const commentRoutes = express.Router();
// POST/api/v1/comments
commentRoutes.post("/", createCommentCtrl);

// GET/api/v1/comments
commentRoutes.get("/", fetchCommentsCtrl);

// GET/api/v1/comments/:id
commentRoutes.post("/:id", fetchCommentCtrl);

// DELETE/api/v1/comments/:id
commentRoutes.delete("/:id", deleteCommentCtrl);

// PUT/api/v1/comments/:id
commentRoutes.put("/:id", updateCommentCtrl);

module.exports = commentRoutes;
