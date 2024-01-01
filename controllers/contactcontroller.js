// to get all contacts
const getAllContact = (req, res)=>{
    return res.status(200).json({message: "contact api"})
}

// to get a specific contact
const specificContact = (req,res)=>{
    return res.status(200).json({message: `contact of id ${req.params.id}`})
}

// to create a new contact
const newContact = (req,res)=>{
    return res.status(200).json({message: `Added contact of id ${req.params.id}`})
}

// to update a contact
const updateContact = (req,res)=>{
    return res.status(200).json({message: `updated contact of id ${req.params.id}`})
}

// to delete a contact
const deleteContact = (req,res)=>{
    return res.status(200).json({message: `deleted contact of id ${req.params.id}`})
}

module.exports = {getAllContact,
    specificContact,
    newContact,
    updateContact,
    deleteContact}