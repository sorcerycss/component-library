import { useContext } from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipText({children}) {
    const { variant } = useContext(TooltipContext)
    return (
        <div className={`tooltip-text tooltip-text-${variant}`}>
            {children}
        </div>
    )
}