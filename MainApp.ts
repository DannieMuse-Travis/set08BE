import {Application, Request,Response} from "express"

export const mainApp=(app:Application)=>{
    try {
        app.get("/",(req:Request,res:Response)=>{
            return res.status(200).json({
                message:"Welcome Home"
            })
        })
    } catch (error) {
        console.log(error)
    }
}