import { useContext } from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipTitle({children}) {
    const { variant } = useContext(TooltipContext)
    return (
        <div className={`tooltip-title tooltip-title-${variant}`}>
            {children}
        </div>
    )
}