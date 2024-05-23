const asyncHandler = require("express-async-handler");
const User =  require("../models/userModel")
const bcrypt =  require("bcrypt");

const registerUser =  asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All the fields are required");
    }

    const userAvailable =  await User.findOne({email})

    if (userAvailable) {
        res.status(400);
        throw new Error("user Already registered");
    }

    // hash password
    const hashedpassword =  await bcrypt.hash(password, 10);
    console.log(hashedpassword);

    const user = await User.create({
        username,email,
        password: hashedpassword
    }); 

    console.log("user created", user);

    if (user) {
        res.status(201).json({_id: user.id, email: user.email, password:user.password})
    }else {
        res.status(400);
        throw new Error("error");
    }

    res.json({message : "Register the user"});
});

const loginUser =  asyncHandler(async(req, res) => {
    res.json({message : "Login user"});
});

const currentUser =  asyncHandler(async(req, res) => {
    res.json({message : "Current User"});
});


module.exports = {registerUser,loginUser, currentUser}