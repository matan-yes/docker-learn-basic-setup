/*
const colors = require('colors');

console.log(colors.rainbow('Hello Matan - Welcome'));
*/
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.json({
      get_response: "This is get response example",
      Topic:"Docker , Nodejs , Express.js"  
    });
});

app.listen(port, ()=>{
    console.log('Express Node.js Server built on Docker platform');
});
