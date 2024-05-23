const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: [true, "please add username"]
    },email:{
        type:String,
        required: [true, "please add email"],
        unique: [true, "Emil Aderess already taken"]
    },
    password: {
        type: String,
        required: [true, "please add the password"]
    },
   
},
{
    timestamps:true,
}
);

module.exports = mongoose.model("User", userSchema);