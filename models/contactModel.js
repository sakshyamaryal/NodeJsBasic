const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Add the Contact name"],
    },
    email:{
        type: String,
        required: [true, "Please Add the Contact email Address"],
    },
    phone:{
        type: String,
        required: [true, "Please Add the Contact Phone Number"],
    },

},{
timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactSchema);