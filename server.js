// mvc => model ,view and controllers
const express = require("express")
const mongoose = require('mongoose');

// connect mongodb;
const app = express();
app.use(express.json())

console.log(app)
// signup and login
//signup or register => usernamen,email and password
//in database //mongodb => register/signup

// login
// email ,password =>  backend => function (controller) => database (models) =>

// app.get("/register", (req, res) => {
//     res.send("running get request")
// })

//
//db connection
mongoose.connect('mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test')
  .then(() => console.log('Connected!'));




const SignupRouter = require("./routes/SignupRoute")


// 
app.use("/user",SignupRouter);

// /signup/register
app.listen("5000", () => {
    console.log("server is runing");
})