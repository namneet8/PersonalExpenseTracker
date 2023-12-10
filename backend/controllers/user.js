const UserModel= require("../models/UserModel")
const {hashPassword, comparePassword} = require('../helpers/auth')
const bcrypt = require('bcrypt');


exports.addUser = async (req, res) => {
    

    

    try {
        //validations
        if(!nameUser || !email || !password){
            return res.status(400).json({message: 'All fields are required!'})
        }
        const {nameUser, email, password}  = req.body
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
    
        // Create a new user
        user = await UserModel.create({
          nameUser: req.body.nameUser,
          email: req.body.email,
          password: secPass,
          
        });
        //res.json({user});
        res.status(200).json({message: 'User Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(user)
}

exports.getUsers = async (req, res) =>{
    try {
        const users = await UserSchema.find().sort({createdAt: -1})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

