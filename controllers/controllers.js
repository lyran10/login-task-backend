const User = require("../models/userModel.js")

const checkIfEmpty = (email,password,name,mobile) => {
  if(!email || !password || !name || !mobile){
    res.status(400).json({msg : "Some of the fields are missing or incorrect"})
    return
  }
}

const userRegister = async(req,res) => {
  const {email,password,name,mobile} = req.body

  if(!email || !password || !name || !mobile){
    res.status(400).json({msg : "Some of the fields are missing or incorrect"})
    return
  }

    const user = await User.find({email : email})

    if(user.length){
      res.status(402).json({msg : "User Already Exists with the given email id"})
    }else{
      const createUser = await User.create(req.body)
      res.status(200).json({msg : "Registration Successfull",user : createUser})
    }
}

const userLogin = async(req,res) => {
  const {email,password} = req.body

  if(!email || !password){
    res.status(400).json({msg : "Email/password is missing"})
    return
  }

    const user = await User.find({email : email,password : password})

    if(user.length){
      res.status(200).json({msg : "login Successfull"})
    }else{
      res.status(402).json({msg : "Email or password is incorrect"})
      return
    }
}

module.exports = {userRegister,userLogin}