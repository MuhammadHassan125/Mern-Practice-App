const express = require('express');

const router = express.Router();
require('../db/connect');

const User = require('../Model/useSchema');

router.get('/', (req, res) => {
    res.send('Hello World from the router js')
})

router.post('/register', (req, res) => {

    const { name, email, work, phone, password, cpassword } = req.body;

    if (!name || !email || !work || !password || !cpassword || !phone) {
        return res.status(402).json({ error: "Please filled the required field" })
    }

    User.findOne({ email: email })
        .then((userexist) => {
            if (userexist) {
                return res.json({ error: "this email is already exist" });
            }

            const user = new User({ name, email, work, password, cpassword, phone })
            user.save().then(() => {
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
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(402).json({ error: "Please filled the required field" })
        }

       const LoginFunction = await User.findOne({email: email})
       console.log(LoginFunction)

       if(!LoginFunction){
            res.status(402).json({error:"Didn't match"})
       }else{
           res.json({message: "User login successfully"})
       }

    } catch (error) {

    }
})

module.exports = router;