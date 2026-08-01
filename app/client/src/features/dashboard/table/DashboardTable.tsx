import type { Listing } from "@/types/Listing"
import { formatPrice } from "@/utils/formatPrice"
import { useNavigate } from "react-router-dom"

interface DashboardTableProps {
    staffListings: Listing[]
}

const DashboardTable = ({ staffListings }: DashboardTableProps) => {
    const navigate = useNavigate()
    return (
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
                        <tr key={listing.id} className='border-b border-gray-100'>
                            <td className='py-4 font-medium text-gray-900'>
                                {listing.title}
                            </td>
                            <td className='py-4 text-gray-600'>
                                {listing.location}
                            </td>
                            <td className='py-4 text-gray-900'>
                                {formatPrice(listing.price)}
                            </td>
                            <td className='py-4'>
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
                            <td className='py-4'>
                                <button onClick={() => navigate(`/listings/${listing.id}`)} className='text-blue-600 bg-blue-100 rounded-full px-4 py-2 hover:bg-blue-200 mr-3'>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))
                )
            }
        </tbody>
    )
}

export default DashboardTable