const express = require('express');
const router = express.Router();
const User = require('../models/Users');
router.get('/', (req, res) => {
    res.send('Backend running from the router')
})

// Regitering the users with the promises

// router.post('/register' , (req, res)=>{
//     const {name , email , password , role} = req.body
//     if(!name || !email || !password || !role ){
//        return res.status(422).json({error: "Please fill out the thinngs"})
//     }
//     User.findOne({email : email}).then((userexist)=>{
//         if(userexist){
//             return res.status(422).json({error : "User already exists"})
//         }
//         console.log("User already exists")
//     }).catch(()=>{
//         return res.json({message : "User"})
//     })
//     const user = new User({name , email , password , role})
//     user.save().then(()=>{
//         return res.status(201).json({message: "User registered Successfully"})
//     }).catch((err)=>{res.status(500).json({error: "Registeration failed"})})
//     })


router.get('/register', (req, res) => {
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        console.error('Error retrieving users', error);
        res.status(500).json({ error: 'Error retrieving users' });
      });
  });

module.exports = router