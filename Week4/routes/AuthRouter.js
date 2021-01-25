const express = require('express')
const authRouter = express.Router()
//const auth = require ("../models/Auth.js")
//const comment = require("../models/Comment.js")
//const issue = require("../models/Issue.js")
const jwt = require("jsonwebtoken")
const User = require('../models/User.js')

//Signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("Tha username is already taken"))
        }

     
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            //Here we use payload & secret
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser })
        })
    })
    
    })

    //login
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
if(err){
    res.status(500)
    return next(err)
}
if(!user){
    res.status(403)
    return next(new Error("Username or Password are in correct"))
    }
    if(req.body.password !== user.password){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({ token, user})
    })
})

/* // Get All
authRouter.get("/", (req, res, next) => {
  //this will pull the data from DB if there is no error
auth.find((err, auth) => {
  //This will deisplay the error f there is any
if(err){
res.status(500)
return next(err)
}
//this will display success status if there is no error
return res.status(200).send(auth)
})
}) 

// Post One
authRouter.post("/", (req, res, next) => {
const newAuth = new auth(req.body)
newAuth.save((err, saveAuth) => {
if(err){
    res.status(500)
    return next(err)
    }
    return res.status(201).send(saveAuth)
})
}) 

//Get one
authRouter.get("/:authId", (req, res, next) => {
    auth.findOne({_id:req.params.authId}, (err, foundId) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundId)
    })
}) 

// Delete One
authRouter.delete("/:authId", (req, res, next) => {
    auth.findOneAndDelete({_id:req.params.authId},(err, deletedItem) => {
    if(err){
    res.status(500)
    return next(err)
} 
return res.status(200).send(`Yo have Succesfully Deleted Item ${deletedItem.product} From The Authorized`)
})
}) 


// Update One
authRouter.put("/:authId", (req, res, next) => {
auth.findByIdAndUpdate(
    {_id:req.params.authId},
    req.body,
    {new: true},
    (err, updatedAuth) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedAuth)
    }
)
}) 
 */


/* addressBookRouter.put("/:addressId", (req, res) =>{
    const singleAddressId = req.params.addressId
    const addressIndex = addressBook.findIndex(addressId => addressId._id === singleAddressId)
    const updateAddress = Object.assign(addressBook[addressIndex], req.body)
    res.status(201).send(updateAddress) */

module.exports = authRouter