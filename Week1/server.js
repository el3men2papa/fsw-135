const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose =require("mongoose")

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 

//connect to DB
// This is connecting to the MongoDB
mongoose.connect("mongodb://localhost:27017/moviesdb",
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



// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require('./routes/tvshowRouter.js'))

// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
  console.log("The server is running on Port 9000")
})