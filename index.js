const AWS = require('aws-sdk');
const express =require('express');
const serverless = require('serverless-http');
const app = express();
  
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello CG");
})
app.get('/hello', (req,res) =>{
    res.send("Hello World");
});

app.post("/hello", (req, res) => {
    const { name } = req.body;
  
    res.json(`Hello there ${name}!`);
  });

 
  // Export the Express app wrapped by the serverless function
  module.exports.handler = serverless(app);
  