// Importing necessaries
const express = require("express")
const router = express.Router()

// importing CRUD
const {getAllContact,
    specificContact,
    newContact,
    updateContact,
    deleteContact} = require("../controllers/contactcontroller")

// normal route
router.route("/").get(getAllContact)

// id route
router.route("/:id").get(specificContact).post(newContact).put(updateContact).delete(deleteContact)

module.exports = router;