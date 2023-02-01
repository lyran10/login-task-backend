const mongoose = require("mongoose")

const userModel = mongoose.Schema({
 email : {type : String},
 password : {type : String},
 name : {type : String},
 mobile : {type : String}
})

const User = mongoose.model("User",userModel)

module.exports = User