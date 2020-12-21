const mongoose = require("mongoose")
const Schema = mongoose.Schema

//movie blueprint (This set rules)
const movieSchema = new Schema({
    //set rules for all the fields with in the DB
    tittle: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    }
})


//this will export the model it needs 2 prarameters Name it and call the blueprint
module.exports = mongoose.model("Movie", movieSchema)