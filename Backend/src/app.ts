import express, {Request, Response,NextFunction} from "express";
import "dotenv/config"
import notesRoutes from "./routes/notes"
import morgan from "morgan"
const app = express()


app.use(morgan("dev"))
app.use(express.json())

app.use("/api/notes", notesRoutes)

app.use((res, req, next)=>{
    next(Error("page not found"))

})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(( error:unknown,req :Request, res:Response,next:NextFunction  )=>{
    console.log(error)
    let errorMessage="an unknown error occurred"
    if(error instanceof Error) errorMessage= error.message
    res.status(500).json({error:errorMessage})

})
    

export default app