const mongoose = require('mongoose')
const Schema = mongoose.Schema

const printSchema = new Schema(
    {
        weight: {
            type: Number, 
            required: false,
            min: 0
        },
        hoursToPrint : {
            type: Number, 
            min: 0,
            required: false, 
        },
        description: {
            type: String,
            required: false, 
        },
        isDone : {
            type: Boolean,
            default: false, 
            required: true, 
        },
}) 

const Print = mongoose.model('Print', printSchema)

module.exports = Print
