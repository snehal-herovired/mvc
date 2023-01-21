// mvc => model ,view and controllers
require('dotenv').config();
const express = require("express")
const mongoose = require('mongoose');

// connect mongodb;
const app = express();
app.use(express.json())



//
//db connection
mongoose.connect('mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test')
  .then(() => console.log('Connected!'));




const SignupRouter = require("./routes/AuthRoute")


//middleware 
// validator => 
app.use("/auth",SignupRouter);

// /signup/register
app.listen("5000", () => {
    console.log("server is runing");
})