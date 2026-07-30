import supabaseAdmin from '../config/supabaseAdmin.js';

export const dashboardRepository = {
    async findAllListings() {
        const { data, error } = await supabaseAdmin.from('listings').select('*');

        if (error) {
            throw new Error(error.message)
        }

        return data || [];
    },

    async findAllAgentListings(id: string){
        const { data, error } = await supabaseAdmin.from('listings').select('*').eq('agent_id', id)

        if(error) throw new Error(error.message)

        return data || []
    },
}