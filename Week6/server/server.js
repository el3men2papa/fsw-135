const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose =require("mongoose")
const expressJwt = require("express-jwt")
require( "dotenv" ).config()

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 

//connect to DB
// This is connecting to the MongoDB
mongoose.connect("mongodb://localhost:27017/authentication",
{
  //this is the configuration Objects 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
//this is the message hat the server DB will display when connects
() => console.log("Connected to the DB")
) 
//app.use("/auth", require("./routes/AuthRouter.js"))


// Routes //
app.use("/auth", require("./routes/AuthRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET,algorithms: ["HS256"]}))
//app.use("/api", expressJwt({ secret: process.env.SECRET,algorithms: ["S256"]}))
app.use("/api/comment", require("./routes/CommentRouter.js"))
app.use("/issue", require("./routes/IssueRouter.js"))
app.use("/user", require("./routes/UserRouter.js"))


// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
  console.log("The server is running on Port 9000")
})