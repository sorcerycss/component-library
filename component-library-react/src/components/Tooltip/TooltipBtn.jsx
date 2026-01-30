import { useContext } from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipBtn({children = "x"}) {

    const {handleClose} = useContext(TooltipContext)

    return <button className="tooltip-btn" onClick={handleClose}>{children}</button>
}