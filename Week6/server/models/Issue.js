const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({

//this set up the relation with the users Schema
/* issue: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
}, */

//this set up the relation with the comment Schema
/* issue: {
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: true
}, */

//this set up the relation with the auth Schema
/* issue: {
    type: Schema.Types.ObjectId,
    ref: "auth",
    required: true */


})




module.exports = mongoose.model("issue", issueSchema)