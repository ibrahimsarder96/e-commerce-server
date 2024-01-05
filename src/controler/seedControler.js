const data = require('../../data');
const user = require('../models/userModel');


const seedUser = async(req, res, next) =>{
  try{
    await user.deleteMany({})

    
  }catch(error){

  }
}