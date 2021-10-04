import { RequestHandler,Request,Response,NextFunction } from "express";
import UserModel from "../models/user.model";


const create:RequestHandler = async (req:Request,res:Response)=>{
    //check request body
    if(req.body!=undefined){
        // create user model
        const user = new UserModel(req.body)
        try {
            //save user to db
            await user.save()
            //send message
            return res.status(201).json({
                message:"Successfully signed up"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error:"Internal Server error"
            })
        }
    }else{
        return res.status(400).json({
            error:"Request body empty"
        })
    }
}


export default {
    create
}

