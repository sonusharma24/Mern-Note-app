import express, {Request, Response,NextFunction} from "express";
import "dotenv/config"
import notesRoutes from "./routes/notes"
import createHttpError ,{isHttpError}from "http-errors";
import morgan from "morgan"
const app = express()


app.use(morgan("dev"))
app.use(express.json())

app.use("/api/notes", notesRoutes)

app.use((res, req, next)=>{
    next(createHttpError(404,"endpoint not found"))

})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(( error:unknown,req :Request, res:Response,next:NextFunction  )=>{
    console.log(error)
    let errorMessage="an unknown error occurred"
    let statusCode = 500
    if(isHttpError(error)){
        statusCode = error.status
    errorMessage = error.message

    }
    
    res.status(statusCode).json({error:errorMessage})

})
    

export default app