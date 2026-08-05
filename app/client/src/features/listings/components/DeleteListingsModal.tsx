import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import axios from 'axios'
import api from '@/config/api/axiosInstance'
import type { DeleteListingsModalProps } from '@/types/Listing'
import { useToast } from '@/hooks/useToast'


const DeleteListingsModal = ({ listingId, open, onOpenChange, onDeleted }: DeleteListingsModalProps) => {
     const { showToast } = useToast()

    const handleDeleteListing = async (id: string) => {
        const token = localStorage.getItem('token')
        if (!token) {
            showToast('Session expired. Please log in again.', 'error')
            return
        }

        try {
            await api.delete(`/api/listings/${id}`, { headers: { Authorization: `Bearer ${token}` } })
            showToast('Listing Deleted Successfully', 'success')
            onOpenChange(false)
            onDeleted?.(id)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                showToast(error.response?.data?.error || 'Something went wrong', 'error')
            } else {
                showToast(error instanceof Error ? error.message : 'Something went wrong', 'error')
            }
        }
    }

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className='border-0 min-w-[20rem] w-full max-w-xl bg-bg-main px-6 py-8 gap-8 sm:px-8 sm:py-10'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your listing.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDeleteListing(listingId)}>
                        Yes, Delete this listing
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteListingsModal