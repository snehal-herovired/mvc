// requuire mongoose
//mongoose.schmea
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users  = new Schema({
 
  username: String,
   email: String,
   password: String,

});

const UserModel = mongoose.model('UserModel',Users);
module.exports = UserModel;