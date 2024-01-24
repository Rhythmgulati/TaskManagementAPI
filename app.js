const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");
const task = require("./models/task"); 
const router = require("./routers/router");
app.use(express.json());
app.use(router);


app.listen(port,()=>{console.log("connected to port:"+port)});