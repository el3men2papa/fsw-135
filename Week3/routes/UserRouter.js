const express = require('express')
//const inventory = require('../models/inventory.js')
const userRouter = express.Router()
//const comment = require("../models/Comment.js")
//const issue = require("../models/Issue.js")
const user = require("../models/User.js")
    


// Get All
userRouter.get("/", (req, res, next) => {
  //this will pull the data from DB if there is no error
user.find((err, user) => {
  //This will deisplay the error f there is any
if(err){
res.status(500)
return next(err)
}
//this will display success status if there is no error
return res.status(200).send(user)
})
})


// Post One
userRouter.post("/", (req, res, next) => {
const newUser = new user(req.body)
newUser.save((err, saveUser) => {
if(err){
    res.status(500)
    return next(err)
    }
    return res.status(201).send(saveUser)
})
})

//Get one
userRouter.get("/:userId", (req, res, next) => {
    user.findOne({_id:req.params.userId}, (err, foundId) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundId)
    })
})

// Delete One
userRouter.delete("/:userId", (req, res, next) => {
    user.findOneAndDelete({_id:req.params.userId},(err, deletedItem) => {
    if(err){
    res.status(500)
    return next(err)
} 
return res.status(200).send(`Yo have Succesfully Deleted Item ${deletedItem.product} From The User`)
})
})


// Update One
userRouter.put("/:userId", (req, res, next) => {
user.findByIdAndUpdate(
    {_id:req.params.userId},
    req.body,
    {new: true},
    (err, updatedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedUser)
    }
)
})


module.exports = userRouter