const express = require("express");
const router =  express.Router();
const {getContact} = require("../controllers/contactController");
const {createContact} = require("../controllers/contactController");
const {deleteContact} = require("../controllers/contactController");
const {updateContact} = require("../controllers/contactController");
const {getContacts} = require("../controllers/contactController");

router.route('/').get(getContacts).post(createContact);

// update contact
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;