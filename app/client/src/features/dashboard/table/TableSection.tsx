import api from "@/config/api/axiosInstance"
import type { Listing } from "@/types/Listing"
import { useEffect, useState } from "react"
import DashboardTable from "./DashboardTable"

const TableSection = () => {
    const [staffListings, setStaffListings] = useState<Listing[]>([])

    useEffect(() => {
        const fetchStaffListings = async () => {
                const token = localStorage.getItem('token')
        
                    try {
                        const { data } = await api.get(
                            `/api/dashboard/listings`,
                            { headers: { Authorization: `Bearer ${token}` } }
                        ) 
        
                        setStaffListings (data.data)
                        console.log(data.data)
                    } catch (error) {
                            console.log(error)
                            return null
                        }
                }
        
                fetchStaffListings()
    }, [])
    return (
        <section className='rounded-xl border border-gray-200 bg-white p-6'>
            <div className='flex items-center justify-between mb-6'>
                <h3 className='text-lg font-semibold text-gray-900'>
                Recent Property Listings
                </h3>

                <button className='text-sm font-medium text-blue-600 bg-blue-100 rounded-full px-4 py-2 hover:text-blue-700'>
                View all
                </button>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                {/* Table Headers */}
                <thead>
                    <tr className='border-b border-gray-200 text-left text-gray-500'>
                    <th className='pb-3 font-medium'>Property</th>
                    <th className='pb-3 font-medium'>Location</th>
                    <th className='pb-3 font-medium'>Price</th>
                    <th className='pb-3 font-medium'>Status</th>
                    <th className='pb-3 font-medium'>Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <DashboardTable staffListings={staffListings}/>
                </table>
            </div>
            </section>
    )
}

export default TableSection