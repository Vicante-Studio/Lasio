import { Request, Response } from 'express'
import { getDashboardStats } from '../services/dashboard.services.js'

export const handleGetDashboardStats = async (req: Request, res: Response) => {
    try {
        const id = req.user.id // Admin's or Agent's Id
        const role = req.user.role // User's role i.e either admin or agent

        const data = await getDashboardStats(id, role as 'admin' | 'agent')

        res.status(200).json({ 
            success: true,
            data
         })
    } catch (error) {
        return res.status(500).json({
        error:
            error instanceof Error
            ? error.message
            : 'Failed to get Admin/Agent stats'
        })
    }
}