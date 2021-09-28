var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
// const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const express = require('express') // require the express package
const app = express() // initialize your express app instance
 API='https://fruit-api-301.herokuapp.com/getFruit'
// a server endpoint 
let Cood 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
let arr=  API.fruits.map((element) =>{
    element.name;
    element.Image;
    element.price;
})
res.send(arr)
})

app.listen(8080) 