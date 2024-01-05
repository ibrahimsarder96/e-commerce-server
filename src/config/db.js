const mongoose = require('mongoose')
const { mongoDB } = require('../secret')

const connectDatabase = async(options) =>{
  try{
    await mongoose.connect(mongoDB, options)
    console.log("connection db successfully established")
    mongoose.connection.on('error', (error) =>{
      console.log('DB connection error:', error)
    })
  }catch(error){
    console.log('could not connection to db:', error)
  }
}

module.exports = connectDatabase;