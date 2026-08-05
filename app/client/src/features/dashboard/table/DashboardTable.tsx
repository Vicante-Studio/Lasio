import { useState } from 'react'
import { MoreActions } from "@/components/features/actions/MoreActions"
import DeleteListingsModal from '@/features/listings/components/DeleteListingsModal'
import { formatPrice } from "@/utils/formatPrice"
import { useNavigate } from "react-router-dom"
import type { DashboardTableProps } from '@/types/DashboardElements'

const DashboardTable = ({ staffListings, showToast, onListingDeleted }: DashboardTableProps) => {
    const navigate = useNavigate()
    const [listingToDeleteId, setListingToDeleteId] = useState<string | null>(null)

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
                            <tr key={listing.id} onClick={() => handleView(listing.id)} className='border-b border-gray-100 hover:bg-yellow-100'>
                                <td className='py-4 font-medium text-gray-900 ml-2'>{listing.title}</td>
                                <td className='py-4 text-gray-600'>{listing.location}</td>
                                <td className='py-4 text-gray-900'>{formatPrice(listing.price)}</td>
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
                                    <MoreActions
                                        onView={() => handleView(listing.id)}
                                        onDelete={() => setListingToDeleteId(listing.id)}
                                    />
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>

            {listingToDeleteId && (
                <DeleteListingsModal
                    listingId={listingToDeleteId}
                    showToast={showToast}
                    open={listingToDeleteId !== null}
                    onOpenChange={(open) => { if (!open) setListingToDeleteId(null) }}
                    onDeleted={(deletedId) => {
                        setListingToDeleteId(null)
                        onListingDeleted?.(deletedId)
                    }}
                />
            )}
        </>
    )
}

export default DashboardTable