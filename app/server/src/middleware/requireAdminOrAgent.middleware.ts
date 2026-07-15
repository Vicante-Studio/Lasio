import { NextFunction, Request, Response } from 'express'

const ALLOWED_ROLES = ['admin', 'agent']

export const requireAdminOrAgent = (req: Request, res: Response, next: NextFunction) => {
    if(!ALLOWED_ROLES.includes(req.user.role)){
        return res.status(403).json({ error: 'This operation requires Admin or Agent access' });
    }
    next()
}