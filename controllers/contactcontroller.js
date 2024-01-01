// to get all contacts
const getAllContact = async (req, res)=>{
    return res.status(200).json({message: "contact api"})
}

// to get a specific contact
const specificContact = async (req,res)=>{
    return res.status(200).json({message: `contact of id ${req.params.id}`})
}

// to create a new contact
const newContact = async (req,res)=>{
    const {name, email, phoneno} = req.body
    if (!(name || email || phoneno)){
        res.status(400)
        throw new Error("All fields are mandatory !")
    }
    return res.status(201).json({message: `Added contact of id ${req.params.id}`})
}

// to update a contact
const updateContact = async (req,res)=>{
    return res.status(200).json({message: `updated contact of id ${req.params.id}`})
}

// to delete a contact
const deleteContact = async (req,res)=>{
    return res.status(200).json({message: `deleted contact of id ${req.params.id}`})
}

module.exports = {getAllContact,
    specificContact,
    newContact,
    updateContact,
    deleteContact}