const createError = require('http-errors');

const userRoute = ((req, res, next)=>{
  try{
    res.status(200).send({
      message: "user Route",
    })
  }catch(error){
   next(error);
  }
});

module.exports = userRoute;