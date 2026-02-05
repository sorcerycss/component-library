import { useState, createContext, useRef } from 'react'
import './Tooltip.css'
import useToggle from '../../hooks/useToggle'
// import useTimeout from '../../hooks/useTimeout'
import useClickOutside from '../../hooks/useClickOutside'

const TooltipContext = createContext()
export { TooltipContext }

export default function Tooltip({variant = "boldDark", children, autoReopen = true}) {

    const [isVisible, toggle] = useToggle(true)
    const tooltipRef = useRef(null)

    const handleClose = () => {
        toggle()

        if (autoReopen) {
            setTimeout(() => {
                toggle()
            }, 1000)
        }
    }

    useClickOutside(tooltipRef, handleClose, isVisible)

    if (!isVisible) return null

    return (
        <TooltipContext.Provider value={{handleClose, variant}}>
            <div
                ref={tooltipRef}
                className={`tooltip tooltip-${variant}`}
            >
                {children}
            </div>
        </TooltipContext.Provider>
    )
}