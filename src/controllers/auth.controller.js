// here we write the logic of API's written in routers

const userModel=require("../models/user.model");
const jwt= require("jsonwebtoken");

async function registerUser(req,res){
    const {username, email, password}=req.body;

    const user= userModel.create({
        username, email, password
    });

    // now user created and got saved into db now we want to generate the token
    // package- jsonwebtoken
    //  things to create token -- 1) token contains data for whom token is created  2)
    const token= jwt.sign({})
}

module.exports={registerUser}; // here we are exporting an obj which contains a func
