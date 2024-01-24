const express = require('express');
const userRoute = require('../controller/userController')
const userRouter = express();

userRouter.get('/', userRoute);

module.exports = userRouter;