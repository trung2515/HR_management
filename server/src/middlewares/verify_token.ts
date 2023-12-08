import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import { badRequest, notAuth } from "./handle_error";

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization
    if(!token) return notAuth('Not authorization',res)
    const accessTokken = token.split(' ')[1]
    jwt.verify(accessTokken, process.env.JWT_SECRET!, (err, user) => {
        if (err) return notAuth('Authorization expired',res)
        req.body.user = user
        next()
    })

}

export default verifyToken