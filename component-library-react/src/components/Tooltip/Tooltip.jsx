import { useState, createContext } from 'react'
import './Tooltip.css'

const TooltipContext = createContext()
export { TooltipContext }

export default function Tooltip({variant = "boldDark", children, autoReopen = true}) {

    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)

        if (autoReopen) {
            setTimeout(() => {
                setIsVisible(true)
            }, 1000)
        }
    }

    if (!isVisible) return null

    return (
        <TooltipContext.Provider value={{handleClose, variant}}>
            <div className={`tooltip tooltip-${variant}`}>
                {children}
            </div>
        </TooltipContext.Provider>
    )
}