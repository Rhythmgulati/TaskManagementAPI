const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/taskapi").then(()=>console.log("db connected")).catch(()=>console.log("db connection error"));