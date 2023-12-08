import createError from 'http-errors'
import { Response } from 'express';

export const badRequest = ( err: any, res: Response) => {
    const error = createError.BadRequest(err)
    return res.status(+res.status).json({
        err: 1,
        mes: error.message
    })
}

export const internalServerError = (res:Response) => {
    const error = createError.InternalServerError('Server wrong')
    return res.status(+res.status).json({
        err: -1,
        mes: error.message
    })
} 

export const notAuth = (err:any, res:Response) => {
    const error = createError.Unauthorized(err)
    return res.status(error.status).json(
        {
            err:1,
            mes:error.message
        }
    )
}