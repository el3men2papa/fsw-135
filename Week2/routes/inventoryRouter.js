const express = require('express')
const inventory = require('../models/inventory.js')
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

// Get All
inventoryRouter.get("/", (req, res, next) => {
  //this will pull the data from DB if there is no error
Inventory.find((err, inventory) => {
  //This will deisplay the error f there is any
if(err){
res.status(500)
return next(err)
}
//this will display success status if there is no error
return res.status(200).send(inventory)
})
})


// Post One
inventoryRouter.post("/", (req, res, next) => {
const newInventory = new Inventory(req.body)
newInventory.save((err, saveInventory) => {
if(err){
    res.status(500)
    return next(err)
    }
    return res.status(201).send(saveInventory)
})
})

//Get one
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    inventory.findOne({_id:req.params.inventoryId}, (err, foundId) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundId)
    })
})

// Delete One
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    inventory.findOneAndDelete({_id:req.params.inventoryId},(err, deletedItem) => {
    if(err){
    res.status(500)
    return next(err)
} 
return res.status(200).send(`Yo have Succesfully Deleted Item ${deletedItem.product} From The Inventory`)
})
})


// Update One
inventoryRouter.put("/:inventoryId", (req, res, next) => {
Inventory.findByIdAndUpdate(
    {_id:req.params.inventoryId},
    req.body,
    {new: true},
    (err, updatedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedInventory)
    }
)
})


module.exports = inventoryRouter