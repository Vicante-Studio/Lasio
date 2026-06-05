import type { ToastProps } from '@/types/UiTypes'

const ToastMsg = ({ msg, state }: ToastProps) => {
  return (
    <div>
      {
        state === "success" ? (
          <div className='bg-green-800'>
            <p>
              {msg}
            </p>
          </div>
        ) : (
          <div className='bg-red-800'>
            <p>
              {msg}
            </p>
          </div>
        )
      }
    </div>
  )
}

export default ToastMsg
