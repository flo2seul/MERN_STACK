const express = require("express");
const {
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
  profileCtrl,
  uploadProfilePhotoCtrl,
  uploadCoverImgCtrl,
  updatePasswordCtrl,
  updateUserCtrl,
} = require("../../controllers/users/users");
const userRoutes = express.Router();

//register

// /register
userRoutes.post("/register", registerCtrl);

// /login
userRoutes.post("/login", loginCtrl);

// GET/api/v1/users/:id
userRoutes.get("/:id", userDetailsCtrl);

// GET/api/v1/users/profile/:id
userRoutes.get("/profile/:id", profileCtrl);

// PUT/api/v1/users/profile-photo-upload/:id
userRoutes.put("/profile-photo-upload/:id", uploadProfilePhotoCtrl);

// PUT/api/v1/users/cover-photo-upload/:id
userRoutes.put("/cover-photo-upload/:id", uploadCoverImgCtrl);

// PUT/api/v1/users/update-password/:id
userRoutes.put("/update-password/:id", updatePasswordCtrl);

// GET/api/v1/users/logout
userRoutes.get("/logout", updateUserCtrl);

module.exports = userRoutes;
