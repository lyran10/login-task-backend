const express = require("express")
const router = express.Router()
const {userRegister,userLogin} = require("../controllers/controllers.js")


router.post("/staffRegister",userRegister)
router.post("/staffLogin",userLogin)

module.exports = router