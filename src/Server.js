const express = require('express');
const server = express();
const morgan = require('morgan'); 

// middleware use
server.use(morgan("dev"));

server.get('/', (req, res)=>{
  res.status(200).send({
    message: "server text route",
  })
});

server.listen(3001, () =>{
  console.log(`server is running http://localhost:3001`);
})