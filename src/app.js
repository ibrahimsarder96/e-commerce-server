const express = require('express');
const app = express();
const morgan = require('morgan'); 
const createError = require('http-errors');
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit'); // 
const xssClean = require('xss-clean');
const userRouter = require('./routers/userRouter');


// api call limit function start-----------
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 5 minutes).
  message: "api resting is fine",
})
// api call limit function end---------------

// middleware use start***********************
app.use(limiter);  
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));


app.use('/api/users',userRouter)
// middleware end****************************

// middleware functions stat-------------
const LoginMiddleware = ((req, res, next) =>{
  const login = true;
    if(login){
      req.body.id = (101);
      next()
    }else{
      return res.status(401).json({message: 'Please login first'})
    }
})
// middleware function end----------

app.get('/', (req, res)=>{
  res.status(200).send({
    message: "server test route",
  })
});


// client site error
app.use((req, res, next )=>{
  next(createError(404, 'rout not found'));
});

// server site error
app.use((err, req, res, next) =>{
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  })
})

module.exports = app;
