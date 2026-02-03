import { useState, createContext } from 'react'
import './Tooltip.css'
import useToggle from '../../hooks/useToggle'

const TooltipContext = createContext()
export { TooltipContext }

export default function Tooltip({variant = "boldDark", children, autoReopen = true}) {

    const [isVisible, toggle] = useToggle(true)

    const handleClose = () => {
        toggle()

        if (autoReopen) {
            setTimeout(() => {
                toggle()
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