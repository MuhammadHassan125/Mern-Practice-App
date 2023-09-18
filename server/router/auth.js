const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const router = express.Router();
require('../db/connect');

const User = require('../Model/useSchema');

router.get('/', (req, res) => {
    res.send('Hello World from the router js')
})

router.post('/register', async (req, res) => {

    const { name, email, work, phone, password, cpassword } = req.body;

    if (!name || !email || !work || !password || !cpassword || !phone) {
        return res.status(402).json({ error: "Please filled the required field" })
    }

    User.findOne({ email: email })
        .then(async (userexist) => {
            if (userexist) {
                return res.json({ error });
            }

            const user = new User({ name, email, work, password, cpassword, phone })
            await user.save().then(() => {
                return res.json({ message: "User registered successfully" });
            }).catch((error) => {
                return res.json({ error });
            })

        }).catch((error) => {
            console.log(error);
        })

})


// Login Validation
router.post('/signin', async (req, res) => {

    try {
        let token
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(402).json({ error: "Please filled the required field" })
        }

       const LoginFunction = await User.findOne({email: email});

     token = await LoginFunction.generateAuthToken();
     console.log(token);

       if(LoginFunction){
            // res.status(402).json({error:"Didn't match"})

            const isMatch = await bcrypt.compare(password, LoginFunction.password)
            if(!isMatch){
                res.send({error:"User error"});
            }else{
                res.send({message:"Huury! User is Login Successfully"});
            }

            res.cookie('test', hassan, {
                httpOnly: true
            })

       }else{
           res.json({message: "OOp's Something gone wrong"})
       }

    } catch (error) {

    }
})

module.exports = router;