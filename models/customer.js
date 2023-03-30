const mongoose = require('mongoose')
const Schema = mongoose.Schema
const printSchema = require('./print')

const customerSchema = new Schema(
    {
        firstName: {
            type: String, 
            required: true, 
        },
        lastName : {
            type: String,
            required: true,
        },
        contact : {
            type: String,
            required: true, 
        },
        description: {
            type: String,
            required: false, 
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        prints :  {
            type : [printSchema.schema],
            required: false 
        },
        
})



const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer