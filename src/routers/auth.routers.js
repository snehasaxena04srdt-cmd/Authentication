const express=require("express");
const authController= require("../controllers/auth.controller");

const router=express.Router();

router.post("/register", authController.registerUser); // here  obj.func coz obj contain the property which is a func

module.exports=router;
