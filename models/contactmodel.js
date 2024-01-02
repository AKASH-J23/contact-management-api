const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required:  [true, "Add the contact"]
    },
    email:{
        type: String,
        required: [true, "Add the email"]
    },
    phoneno:{
        type: Number,
        required: [true, "Add the phone number"]
    }
},{
    timetamps: true
})

const contactModel = mongoose.model("contact",contactSchema)

module.exports = contactModel