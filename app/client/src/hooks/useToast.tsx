import type { ToastProps } from '@/types/UiTypes'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ToastMessage from '@/components/features/toast/ToastMsg'

export function useToast(){
     const [toast, setToast] = useState<ToastProps | null>(null)

    const showToast = (msg: string, state: "error" | "success") => {
        setToast({ msg, state })
        setTimeout(() => setToast(null), 3000)
    }

    const ToastComponent = (
        <AnimatePresence>
            {toast && <ToastMessage key="toast" msg={toast.msg} state={toast.state} />}
        </AnimatePresence>
    )

    return { toast, showToast, ToastComponent }
}