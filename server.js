/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ___Kevin Macqury Sivarajakumaran___________________ Student ID: __140327206____________ Date: _____01/18/2023___________
*
*  Cyclic Web App URL: ___
_https://nice-teal-beaver-boot.cyclic.app_________________________________________________
*
*  GitHub Repository URL: ___
Your Repositories (github.com)__

KevinMacqury1105/helloworld(github.com)________________________________________________
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Kevin Macqury - 140327206");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);