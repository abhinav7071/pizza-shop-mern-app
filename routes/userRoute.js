const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

//sign-up
router.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;
    const newUser = new User({name,email,password});

    try{
        newUser.save();
        res.status(200).json({success:true, message:'Registration Success'});
    } catch(error){
        res.status(400).json({message:error});
    }
});

//login
router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.find({ email,password });
        if(user.length > 0){
            const currentUser = {
                _id : user[0].Id,
                name : user[0].name,
                email : user[0].email,
                isAdmin : user[0].isAdmin 
            }
            res.status(200).send(currentUser);
        } else {
            res.status(400).json({ message: 'Login Failed '});
        }   
    } catch(error){
        res.status(400).json({message:'Something went wrong'});
    }
});

//////admin side users
router.get("/getallusers", async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (error) {
      res.status(404).json({ message: error.stack });
    }
  });
  
  router.post("/deleteuser", async (req, res) => {
    const userid = req.body.userid;
    try {
      await User.findOneAndDelete({ _id: userid });
      res.status(200).send("User Deleted");
    } catch (error) {
      res.status(404).json({ message: error.stack });
    }
  });
  module.exports = router;
  

module.exports = router;