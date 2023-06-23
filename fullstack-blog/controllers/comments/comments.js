const createCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment created",
    });
  } catch (error) {
    res.json(error);
  }
};

const fetchCommentsCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comments list",
    });
  } catch (error) {
    res.json(error);
  }
};

const fetchCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comments details",
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Posts deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

const updateCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment updated",
    });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  createCommentCtrl,
  fetchCommentsCtrl,
  fetchCommentCtrl,
  deleteCommentCtrl,
  updateCommentCtrl,
};
