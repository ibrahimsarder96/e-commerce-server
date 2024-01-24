const app = require('./app');
const connectDatabase = require('./config/db');
const port = require('./secret')

app.listen(port.serverPort, async() =>{
  console.log(`server is running http://localhost:${port.serverPort}`);
  await connectDatabase();
})