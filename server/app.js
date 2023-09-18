const dotenv = require("dotenv")
const mongoose = require('mongoose');

const express = require('express')
const app = express()

dotenv.config({path: './config.env'})
require('./db/connect');

app.use(express.json());


require('./Model/useSchema');

app.use(require('./router/auth'));



const middleware = (req, res, next)=>{
    console.log("This is my middleware")
    next();
}

app.get('/', function (req, res){
    res.send('Hello World')
})


app.get('/about', middleware, function (req, res){
    res.send('Hello World from about')
})


app.get('/signin', function (req, res){
    res.send('Hello World from signin')
})


app.get('/signup', function (req, res){
    res.send('Hello World from signup')
})


app.get('/contact', function (req, res){
    res.cookie('test', hassan);
    res.send('Hello World from contact us page')
})


app.listen(3000);