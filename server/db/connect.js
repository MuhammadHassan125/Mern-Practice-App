const mongoose = require('mongoose')

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Your MongoDB connection is successfull");
}).catch((error)=>{
    console.log(error)
})