import successIcon from '../../assets/success-icon.svg'
import warningIcon from '../../assets/warning-icon.svg'
import errorIcon from '../../assets/error-icon.svg'
import neutralIcon from '../../assets/neutral-icon.svg'

const icons = {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    neutral: neutralIcon
}

export default function BannerIcon({variant = "neutral"}) {
    return (
        <img
           src={icons[variant]}
           alt="Banner icon"
           className="banner-icon"
        />
    )
}