const asyncHandler = require("express-async-handler");
const User =  require("../models/userModel")
const bcrypt =  require("bcrypt");
const jwt =  require("jsonwebtoken");

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
    const {email , password} = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error ("All fields are mandetory");
    }

    const user = await User.findOne({email});

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user :{
                username: user.username,
                email : user.email,
                id : user.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET, 
        {expiresIn : "15m"}
        );
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error("email or password is not valid")
    }

});

const currentUser =  asyncHandler(async(req, res) => {
    res.json(req.user);
});


module.exports = {registerUser,loginUser, currentUser}