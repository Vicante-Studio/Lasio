import { Request } from 'express';
import { Listing } from './listing.types.ts';

declare global {
    namespace Express {
        interface Request {
            user: {
                id: string;
                email: string;
                role: 'user' | 'agent' | 'admin';
            }
            listing?: Listing
        }
    }
}