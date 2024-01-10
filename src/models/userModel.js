const {Schema, modal} = require('mongoose');
const bcrypt = require('bcrypt');
const { defaultImage } = require('../secret');


const userSchema = new Schema({
  name:{
    type: string,
    required: [true, 'user name is required'],
    trim: true,
    minlength: [3, 'The length of the user name can be min 3 characters'],
    maxlength: [31, 'The length of the user name can be max 31 characters']
  },
  email:{
    type: string,
    required: [true, 'user email is required'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v){
        return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
      },
      message: 'Please Enter valid email address'
    }
  },
  password:{
    type: string,
    required: [true, 'user password is required'],
    minlength: [6, 'The length of the user password can  be min 6 characters'],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10))
  },
  image:{
    type: string,
    default: defaultImage
  },
  address:{
    type: string,
    required: [true, 'user address is required'],
  },
  phone:{
    type: string,
    required: [true, 'user phone is required'],
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  isBanned:{
    type: Boolean,
    default: false
  },
}, {timestamps: true})

const User = modal('user', userSchema);
module.exports = User;