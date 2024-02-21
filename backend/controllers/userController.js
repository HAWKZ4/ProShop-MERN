import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.send("Auth user");
});

// @desc Register user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc Updtate user profile
// @route PUT /api/users/profile
// @access Private/Admin

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// @desc GET users
// @route GET /api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users");
});

// @desc Delete User
// @route Delete /api/users/:id
// @access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

// @desc Get user by ID
// @route Get /api/users
// @access Private/Admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get user by ID");
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user");
});

export {
  authUser,
  deleteUser,
  getUserByID,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
};