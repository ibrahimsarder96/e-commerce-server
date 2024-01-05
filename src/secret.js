require('dotenv').config()

const serverPort = process.env.SERVER_PORT || 3002;
const mongoDB = process.env.MONGODB_URL;
const defaultImage = 'public/images/user/ibrahim.png';
module.exports = {serverPort, mongoDB, defaultImage}