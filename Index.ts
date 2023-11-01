import express,{Application} from "express"
import cors from "cors"
import { mainApp } from "./MainApp"
import "./Config/DbConfig"

const port:number = 5000
const  app:Application = express()

mainApp(app)
app.use(cors())
app.use(express.json())

const Server=app.listen(port,()=>{
    console.log("Server is Ready........")
})

process.on("uncaughtException",(error)=>{
    console.log("uncaughtException",(error))
    process.exit(1)
})

process.on("unhandledRejection",(reason)=>{
    console.log("unhandledRejection",(reason))
    
    Server.close(()=>{
        process.exit(1)
    })
})

