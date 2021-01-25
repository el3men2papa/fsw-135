const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
title: {
    type: String,
    required: true
},

description: {
    type: String
},

completed: {
type: Boolean,
default: false
},

/* imgUrl: {
    type: String,
    default: false
}, */
//this set up the relation with the users Schema
user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
}

})


module.exports = mongoose.model("comment", commentSchema)