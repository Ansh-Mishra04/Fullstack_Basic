require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send('AnshMishra')
});
app.get('/login',(req,res)=>{
    res.send('<h1>Login at College Hub</h1>')
});

app.get('/events',(req,res)=>{
    res.send('<h2>Events Live<h2>')
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
