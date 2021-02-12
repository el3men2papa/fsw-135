const mongoose = require ("mongoose")
const Schema = mongoose.Schema
const bcrypt = require ("bcrypt")


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

//This will ecript the password.
userSchema.pre("save", function(next){
const user = this
if(!user.isModified("password")) 
return next()
bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) 
    return next(err)
    user.password = hash
    next()
})
})

//This will check the encript password
userSchema.methods.checkPassword = function( passwordAttempt, callback ){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        return callback(null, isMatch)
    })
}

//this will remove the password not to show in the front end so they wont steal it
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("user", userSchema)