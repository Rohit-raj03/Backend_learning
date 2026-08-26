const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("this server runnig successfully")
});

module.exports = app;