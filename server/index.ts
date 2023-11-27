import express from 'express'
import cors from 'cors'
import 'dotenv/config'
// import userRouter from './src/routers/userRouter'
import authRouter from './src/routers/authRouter'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', "DELETE"]
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter);

const port = process.env.PORT || 8888
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})