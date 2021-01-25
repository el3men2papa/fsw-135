const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const userSchema = new Schema({
 username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
},

password: {
    type: String,
    required: true
},

memberSince: {
    type: Date,
    default: Date.now
},

isAdmin: {
    type: Boolean,
    default: false 
}
 /*
//this set up the relation with the users Schema
/* user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
},

//this set up the relation with the issue Schema
user: {
    type: Schema.Types.ObjectId,
    ref: "issue",
    required: true
},*/

//this set up the relation with the auth Schema
/* user: {
    type: Schema.Types.ObjectId,
    ref: "auth", */
   /*  required: true */


})


userSchema.methods.withoutPassword = function (){
    const user = this.toObject()
    delete user.password
    return (
        user
    )
}


module.exports = mongoose.model("user", userSchema)