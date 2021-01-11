const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
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


module.exports = mongoose.model("issue", issueSchema)