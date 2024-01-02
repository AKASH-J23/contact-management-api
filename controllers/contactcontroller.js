const asyncHandler = require("express-async-handler")
const contact = require("../models/contactmodel")

// to get all contacts
const getAllContact = asyncHandler( async (req, res)=>{
    const allContacts = await contact.find()
    res.status(200).json({message: allContacts})
})

// to get a specific contact
const specificContact = asyncHandler( async (req,res)=>{
    return res.status(200).json({message: `contact of id ${req.params.id}`})
})

// to create a new contact
const newContact = asyncHandler( async (req,res)=>{
    const {name, email, phoneno} = req.body
    if (!(name || email || phoneno)){
        res.status(400)
        throw new Error("All fields are mandatory !")
    }
    return res.status(201).json({message: `Added contact of id ${req.params.id}`})
})

// to update a contact
const updateContact = asyncHandler( async (req,res)=>{
    return res.status(200).json({message: `updated contact of id ${req.params.id}`})
})

// to delete a contact
const deleteContact = asyncHandler( async (req,res)=>{
    return res.status(200).json({message: `deleted contact of id ${req.params.id}`})
})

module.exports = {getAllContact,
    specificContact,
    newContact,
    updateContact,
    deleteContact}