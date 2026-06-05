import type { ToastProps } from '@/types/UiTypes'
import { motion } from 'framer-motion'

const ToastMsg = ({ msg, state }: ToastProps) => {
  return (
    <motion.div
       className='w-fit fixed right-10 top-10 z-100'
       initial={{ opacity: 0.5, y: 100}}
       animate={{ opacity: 1, y: 0}}
       exit={{ opacity: 0, y: 100 }}
       transition={{ duration: 1.5 }}
    >
      {
        state === "success" ? (
          <div className='bg-green-300 border-green-600 border px-4 py-2 rounded'>
            <p className='text-green-900 font-bold'>
              {msg}
            </p>
          </div>
        ) : (
          <div className='bg-red-300 border-red-600 border px-4 py-2 rounded'>
            <p className='text-red-900 font-bold'>
              {msg}
            </p>
          </div>
        )
      }
    </motion.div>
  )
}

export default ToastMsg
