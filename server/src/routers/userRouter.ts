import { Router } from "express";

const userRouter = Router()

userRouter.get('/', (req, res)=> {
    return res.send('user test')
})

export default userRouter