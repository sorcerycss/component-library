import successIcon from '../assets/success-icon.png'
import warningIcon from '../assets/warning-icon.png'
import errorIcon from '../assets/error-icon.png'
import neutralIcon from '../assets/neutral-icon.png'

const variants = {
    success: {
        backgroundColor: '#ECFDF5',
        color: '#047857',
        icon: successIcon
    },
    warning: {
        backgroundColor: '#FFFBEB',
        color: '#B45309',
        icon: warningIcon
    },
    error: {
        backgroundColor: '#FEF2F2',
        color: '#B45309',
        icon: errorIcon
    },
    neutral: {
        backgroundColor: '#EFF6FF',
        color: '#1C51B9',
        icon: neutralIcon
    }
}

export default function Banner({ variant, title, text }) {

    const currentVariant = variants[variant]

    return (
        <div style={{
            backgroundColor: currentVariant.backgroundColor,
            color: currentVariant.color,
            display: 'flex',
            gap: '12px'
        }}>
            <img src={currentVariant.icon} alt="Banner icon" style={{width: '20px', height: '20px'}}/>
            <div>
           <div>{title}</div>
           {text && <div>{text}</div>}
            </div>
        </div>
    )
}