import { createContext } from 'react'
import './Toast.css'

const ToastContext = createContext(null)
export { ToastContext }

export default function Toast({ variant = "success", children, onClose }) {
    return (
        <ToastContext.Provider value={{variant, onClose}}>
            <div className={`toast toast-${variant}`}>
                {children}
            </div>
        </ToastContext.Provider>
    )
}