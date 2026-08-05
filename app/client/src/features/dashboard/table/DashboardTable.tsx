import { formatPrice } from "@/utils/formatPrice"
import { useNavigate } from "react-router-dom"
import type { DashboardTableProps } from '@/types/DashboardElements'

const DashboardTable = ({ staffListings }: DashboardTableProps) => {
    const navigate = useNavigate()

    const handleView = (listingId: string) => {
        navigate(`/listings/${listingId}`) 
    }

    return (
        <>
            <tbody>
                {
                    staffListings === null ? (
                        <tr>
                            <td colSpan={5} className='py-6 text-center text-gray-500'>
                                Loading listings...
                            </td>
                        </tr>
                    ) : staffListings.length === 0 ? (
                        <tr>
                            <td colSpan={5} className='py-6 text-center text-gray-500'>
                                No listings found.
                            </td>
                        </tr>
                    ) : (
                        staffListings.map((listing) => (
                            <tr key={listing.id} onClick={() => handleView(listing.id)} className='border-b border-gray-100 hover:bg-yellow-100 hover:cursor-pointer'>
                                <td className='py-4 font-medium text-gray-900 px-2'>{listing.title}</td>
                                <td className='py-4 text-gray-600 px-2'>{listing.location}</td>
                                <td className='py-4 text-gray-900 px-2'>{formatPrice(listing.price)}</td>
                                <td className='py-4 px-2'>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                                            listing.is_available === true
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                        }`}
                                    >
                                        {listing.is_available ? 'Available' : 'Not Available'}
                                    </span>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </>
    )
}

export default DashboardTable