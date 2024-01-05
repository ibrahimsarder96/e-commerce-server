const express = require('express');
const userRoute = require('../controler/userControler');
const userRouter = express();


userRouter.get('/', userRoute);


module.exports = userRouter;