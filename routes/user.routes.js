const express = require('express');
const userRouter = express.Router();

const { findById, getUsers, requestPasswordReset, resetPassword, signIn, signUp, updateUser, findByEmail, upload, attachFile, deleteAccount, findByUserType } = require('../controllers/user.controllers');

userRouter.post('/signin', signIn);
userRouter.post('/signup', upload.single('profilePicture'), attachFile, signUp);
userRouter.post('/requestPasswordReset', requestPasswordReset);
userRouter.put('/resetPassword', resetPassword);
userRouter.put('/update', upload.single('profilePicture'), attachFile, updateUser);
userRouter.get('/findById', findById);
userRouter.get('/findByUserType', findByUserType);
userRouter.get('/findByEmail', findByEmail);
userRouter.get('/list', getUsers);
userRouter.delete('/delete', deleteAccount);

module.exports = userRouter;