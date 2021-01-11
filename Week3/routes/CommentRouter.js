const express = require('express')
const commentRouter = express.Router()
const comment = require("../models/Comment.js")
    


// Get All
commentRouter.get("/", (req, res, next) => {
  //this will pull the data from DB if there is no error
comment.find((err, comment) => {
  //This will deisplay the error f there is any
if(err){
res.status(500)
return next(err)
}
//this will display success status if there is no error
return res.status(200).send(comment)
})
})

//get by User
commentRouter.get("/:userID", (req, res, next) => {
    comment.find({ user: req.params.userID }, (err, comment) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

// Post One
commentRouter.post("/:userID", (req, res, next) => {
req.body.user = req.params.userID
const newComment = new comment(req.body)
newComment.save((err, saveComment) => {
if(err){
    res.status(500)
    return next(err)
    }
    return res.status(201).send(saveComment)
})
})

//Get one
commentRouter.get("/:commentId", (req, res, next) => {
    comment.findOne({_id:req.params.commentId}, (err, foundId) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundId)
    })
})

// Delete One
commentRouter.delete("/:commentId", (req, res, next) => {
    comment.findOneAndDelete({_id:req.params.commentId},(err, deletedItem) => {
    if(err){
    res.status(500)
    return next(err)
} 
return res.status(200).send(`Yo have Succesfully Deleted Item ${deletedItem.product} From The Comment`)
})
})


// Update One
commentRouter.put("/:commentId", (req, res, next) => {
comment.findByIdAndUpdate(
    {_id:req.params.commentId},
    req.body,
    {new: true},
    (err, updatedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedComment)
    }
)
})


module.exports = commentRouter