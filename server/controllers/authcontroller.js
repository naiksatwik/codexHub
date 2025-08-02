const express = require('express');
const User = require("../model/User");
const bcrypt  = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const { use } = require('../routes/userRoutes');


const registerUser =async (req, res) => {
      try{
            const{name, email,password} = req.body;
            if (!name || !email || !password) {
                  return res.status(400).json({ message: 'All fields are required.' });
            }

            const alreadyRegistered = await User.findOne({email});

            if(alreadyRegistered){
                  return  res.status(409).json({message : "user already registered ....!" });
            }
            else{
                  const hashedPassword = await bcrypt.hash(password,10);
                  const user_id = uuidv4();  

                  const user = new User({
                        user_id, 
                        name,
                        email,
                        password : hashedPassword
                  });

                  await user.save();
                  
                  res.status(201).json({
                        message: 'User registered successfully',
                        user: {
                          id: user._id,
                          name: user.name,
                          email: user.email
                        }
                  });
            }
      }
      catch(err){
            console.error('Registration Error:', err);
            res.status(500).json({ message: 'Server error' });
      }
};

const loginUser = async(req,res) => {
      try{
          const {email , password} = req.body;
          const user = await User.findOne({email});

          if(!user){
             res.status(401).json({message :"invalid user"});
          }

          const checkPassword = await bcrypt.compare(password , user.password);

          if(!checkPassword){
            res.status(401).json({message: "incorrect Password"});
          }

          res.status(201).json({
            message : "Login Successful...",
            user_data : {
               user_id : user.user_id,
               name:user.name,
               email:user.email,
            }
          })
      }
      catch(err){
          console.error("Message: ",err);
          res.status(500).json({
            message : "Server error"
          })
      }
}

module.exports = { registerUser ,loginUser};
