import express from "express";
import homeController from "../controllers/homeController";
let router=express.Router();

let initWebRoutes=(app)=>{
    router.get ('/',homeController.getHomePage);
    
    router.get ('/hoiminhnghechua',(req,res)=>{
        return res.send('Hello cai gi?')
    });

    return app.use("/",router);
}

module.exports=initWebRoutes;