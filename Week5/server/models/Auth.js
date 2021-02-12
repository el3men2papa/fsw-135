const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const authSchema = new Schema({

//this set up the relation with the users Schema
/* user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
} */
/* 
//this set up the relation with the issue Schema
issue: {
    type: Schema.Types.ObjectId,
    ref: "issue",
    required: true
},

//this set up the relation with the comment Schema
comment: {
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: true
} */
})



module.exports = mongoose.model("auth", authSchema)
 