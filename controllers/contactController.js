//  to give the lable 

// @desc get all contat
// @route GET /api/contacts

// @access Public
const asyncHandler = require("express-async-handler");

const getContacts =  asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get All Contacts' });
});

const createContact = asyncHandler(async (req, res) => {
    console.log("the req body is :" , req.body);
    const {
        name, email,phone 
    } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Mandetory");
    }
    res.status(201).json({ message: 'create contacts' });
})

const getContact = asyncHandler( async(req, res) => {
    res.status(200).json({ message: `get Contacts for ${req.params.id}` });
})

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update Contacts for ${req.params.id}` });
})

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `delete Contacts for ${req.params.id}` });
})

module.exports = { getContact,createContact,getContacts,updateContact,deleteContact };
