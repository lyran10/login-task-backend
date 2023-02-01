const express = require("express")
const app = express()
const cors = require("cors")
const {connectDB} = require("./connection/db.js")
const userRouter = require("./routes/routes.js")
const dotenv = require("dotenv")

dotenv.config()
connectDB()

app.use(express.json())
app.use(cors({
  origin : ["http://localhost:3000","https://login-task-frontend.onrender.com/"]
}))

app.use("/api/auth",userRouter)

app.listen(5000,() => {
  console.log("running at 5000")
})