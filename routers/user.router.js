const express = require('express');
const { register , login , getAllTrip} = require('../controllers/user.controllers');
const { authenticate } = require('../middlewares/authen/authenticate');

const userRouter = express.Router();

userRouter.post("/register" , register);
userRouter.post("/login" , login)
userRouter.get("/all-trip" , getAllTrip)

module.exports = {
    userRouter,
} 