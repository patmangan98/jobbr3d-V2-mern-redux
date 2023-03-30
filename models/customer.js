const mongoose = require("mongoose")
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
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        prints :  {
            type : [printSchema.schema],
            required: false 
        },
        
})



module.exports = mongoose.model('Customer', customerSchema)
// module.exports = Customer