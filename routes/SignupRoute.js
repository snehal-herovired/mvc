const express = require("express");

const SignupRouter = express.Router();


// importing controller ;
const RegisterUser =require("../controllers/RegisterUser")
SignupRouter.post("/register",RegisterUser)


SignupRouter.get("/login", (req, res) => {
    res.send("login")
})

module.exports = SignupRouter;