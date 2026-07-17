import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '../../ui/Buttons/button'
import type { DeleteListingModalProps } from '@/types/Listing'
import { Trash2Icon } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import api from '@/config/api/axiosInstance'

const DeleteListingsModal = ({ listingId, showToast }: DeleteListingModalProps) => {

    const navigate = useNavigate()

    const handleDelete = async(listingId: string) => {
        //Get token from localStorage
        const token = localStorage.getItem('token')
        if (!token) {
            showToast('Session expired. Please log in again.', 'error')
            return
        }
        
        try {
            const res = await api.delete(`/api/listings/${listingId}`, { headers: { Authorization: `Bearer ${token}` } })

            console.log(res)
            showToast('Listing Deleted Successfully', 'success')
            setTimeout(() => navigate('/'), 1000)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const msg = error.response?.data?.error || 'Something went wrong'
                showToast(msg, 'error')
            } else {
                showToast(error instanceof Error ? error.message : 'Something went wrong', 'error')
            }
        }
    }

  return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
                <Button variant="destructive">
                    Delete
                    <Trash2Icon size={18} color='rgba(255,0,0,0.6)' />
                </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='border-0 min-w-[20rem] w-full max-w-xl bg-bg-main px-6 py-8 gap-8 sm:px-8 sm:py-10'>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your listing.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => {
                     handleDelete(listingId)
                }}>
                    Yes, Delete this listing
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteListingsModal
