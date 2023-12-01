import createError from 'http-errors'
import { Response } from 'express';

export const badRequest = ( err: any, res: Response) => {
    const error = createError.BadRequest(err)
    return res.status(400).json({
        err: 1,
        mes: error.message
    })
}

export const internalServerError = (res:Response) => {
    const error = createError.InternalServerError('Server wrong')
    return res.status(500).json({
        // err: -1,
        // mes: error.message
        gg:'gg'
    })
} 
