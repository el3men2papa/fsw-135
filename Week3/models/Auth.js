const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const authSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    quantaty:{
        type: Number,
        required: true
    },
    aisle: {
        type: Number,
        required: true
    }



})


module.exports = mongoose.model("auth", authSchema)
