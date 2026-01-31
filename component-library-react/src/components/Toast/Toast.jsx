import { createContext } from 'react'
import './Toast.css'

const ToastContext = createContext(null)
export { ToastContext }

export default function Toast({ variant = "success", children }) {
    return (
        <ToastContext.Provider value={{variant}}>
            <div className={`toast toast-${variant}`}>
                {children}
            </div>
        </ToastContext.Provider>
    )
}