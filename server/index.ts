import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import authRouter from './src/routers/authRouter'
import roleRouter from './src/routers/roleRouter'
import userRouter from './src/routers/userRouter';
import employeeRouter from './src/routers/employeeRouter';
import departmentRouter from './src/routers/departmentRouter';

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/role', roleRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/department', departmentRouter);

const port = process.env.PORT || 8888
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})