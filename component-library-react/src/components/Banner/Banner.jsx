import './Banner.css'

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

export default function Banner({ variant = 'neutral', title, text }) {

    return (
        <div className={`banner banner-${variant}`}>
            <img
            src={icons[variant]}
            alt="Banner icon"
            className='banner-icon'/>
            <div className='banner-content'>
                <div className='banner-title'>{title}</div>
                {text && <div className='banner-text'>{text}</div>}
            </div>
        </div>
    )
}