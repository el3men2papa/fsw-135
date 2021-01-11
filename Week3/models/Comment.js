const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true
    }


})


module.exports = mongoose.model("comment", commentSchema)