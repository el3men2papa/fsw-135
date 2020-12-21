const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    product: {
        type: String,
        required: true
    },
    quantaty:{
        type: Number,
        required: true
    },

})


module.exports = mongoose.model("inventory", inventorySchema)