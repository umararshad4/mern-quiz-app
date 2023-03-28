import express from 'express'
import * as dotenv from 'dotenv'
import QuestionRouter from './router/questions'
import cors from 'cors'
dotenv.config()


const app = express()
const port = process.env.PORT || 3333
//middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/quiz/v1', QuestionRouter)

app.listen(port, () => {
    console.log(
        `server is running on http://localhost:${port}`
    );
})