const express = require('express')
const issueRouter = express.Router()
const issue = require("../models/Issue.js")

    

// Get All
issueRouter.get("/", (req, res, next) => {
    //this will pull the data from DB if there is no error
  issue.find((err, issue) => {
    //This will deisplay the error f there is any
  if(err){
  res.status(500)
  return next(err)
  }
  //this will display success status if there is no error
  return res.status(200).send(issue)
  })
  })


// Post One
issueRouter.post("/", (req, res, next) => {
const newIssue = new issue(req.body)
newIssue.save((err, saveIssue) => {
if(err){
    res.status(500)
    return next(err)
    }
    return res.status(201).send(saveIssue)
})
})

//Get one
issueRouter.get("/:issueId", (req, res, next) => {
    issue.findOne({_id:req.params.issueId}, (err, foundId) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundId)
    })
})

// Delete One
issueRouter.delete("/:issueId", (req, res, next) => {
    issue.findOneAndDelete({_id:req.params.issueId},(err, deletedItem) => {
    if(err){
    res.status(500)
    return next(err)
} 
return res.status(200).send(`Yo have Succesfully Deleted Item ${deletedItem.product} From The Issue`)
})
})


// Update One
issueRouter.put("/:issueId", (req, res, next) => {
issue.findByIdAndUpdate(
    {_id:req.params.issueId},
    req.body,
    {new: true},
    (err, updatedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedIssue)
    }
)
})


module.exports = issueRouter