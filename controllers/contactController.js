//  to give the lable 

// @desc get all contat
// @route GET /api/contacts

// @access Public
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const getContacts =  asyncHandler(async(req, res) => {
    const contact  = await Contact.find();
    res.status(200).json(contact);
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

    const contact = await Contact.create({
        name, email ,phone
    });

    res.status(201).json(contact);
})


const getContact = asyncHandler( async(req, res) => {
    const contact  = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Data not found");
    }    

  
    res.status(200).json(contact);
})

const updateContact = asyncHandler(async(req, res) => {

    const contact  = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Data not found");
    }    

    const updatedContact =  await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );

    res.status(200).json(updatedContact);
})

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Data not found");
    }

    await contact.remove();

    res.status(200).json({ message: "Contact deleted successfully" });
});


module.exports = { getContact,createContact,getContacts,updateContact,deleteContact };
