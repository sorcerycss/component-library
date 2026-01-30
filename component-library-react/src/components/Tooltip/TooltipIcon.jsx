import { useContext } from "react"
import { TooltipContext } from "./Tooltip"

import TooltipIconBoldDark from "../../assets/tooltip-icon__bold-dark.svg"
import TooltipIconBoldBlue from "../../assets/tooltip-icon__bold-blue.svg"
import TooltipIconBoldPurple from "../../assets/tooltip-icon__bold-purple.svg"
import TooltipIconBoldGreen from "../../assets/tooltip-icon__bold-green.svg"

import TooltipIconLightDark from "../../assets/tooltip-icon__light-dark.svg"
import TooltipIconLightBlue from "../../assets/tooltip-icon__light-blue.svg"
import TooltipIconLightPurple from "../../assets/tooltip-icon__light-purple.svg"
import TooltipIconLightGreen from "../../assets/tooltip-icon__light-green.svg"

const icons = {
    boldDark: TooltipIconBoldDark,
    boldBlue: TooltipIconBoldBlue,
    boldPurple: TooltipIconBoldPurple,
    boldGreen: TooltipIconBoldGreen,
    lightDark: TooltipIconLightDark,
    lightBlue: TooltipIconLightBlue,
    lightPurple: TooltipIconLightPurple,
    lightGreen: TooltipIconLightGreen
}

export default function TooltipIcon({alt = "Tooltip Icon"}) {
    const { variant } = useContext(TooltipContext)
    return (
        <img
            src={icons[variant]}
            alt={alt}
            className="tooltip-icon"
        />
    )
}