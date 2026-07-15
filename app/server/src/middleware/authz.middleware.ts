import { NextFunction, Request, Response } from 'express'
import supabase from '../config/supabase.js';
import supabaseAdmin from '../config/supabaseAdmin.js';
import { getOneListing } from '../services/listing.service.js';

const ALLOWED_ROLES = ['admin', 'agent']

export const requireAdminOrAgent = (req: Request, res: Response, next: NextFunction) => {
    if(!ALLOWED_ROLES.includes(req.user.role)){
        return res.status(403).json({ error: 'This operation requires Admin or Agent access' });
    }
    next()
}

export const requireOwnershipOrAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const listing = await getOneListing(id as string)

        if(!listing) {
            return res.status(404).json({ error: 'Listing not found' })
        }

        const isOwner = listing.agent_id === req.user.id
        const isAdmin = req.user.role === 'admin'

        if( !isOwner && !isAdmin ) {
            return res.status(403).json({ error: 'You can only edit your own listings'})
        }

        req.listing = listing
        next()
    } catch (error) {
        next(error)
    }
}