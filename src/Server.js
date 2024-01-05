const app = require('./app');
const connectDatabase = require('./config/db');
const port = require('./secret')

app.listen(port.serverPort, () =>{
  console.log(`server is running http://localhost:${port.serverPort}`);
  connectDatabase();
})