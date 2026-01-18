const variants = {
    success: {
        backgroundColor: '#ECFDF5',
        color: '#047857'
    },
    warning: {
        backgroundColor: '#FFFBEB',
        color: '#B45309'
    },
    error: {
        backgroundColor: '#FEF2F2',
        color: '#B45309'
    },
    neutral: {
        backgroundColor: '#EFF6FF',
        color: '#1C51B9'
    }
}

export default function Banner({ variant, title, text }) {

    const currentVariant = variants[variant]

    return (
        <div style={{
            backgroundColor: currentVariant.backgroundColor,
            color: currentVariant.color
        }}>
           <div>{title}</div>
           {text && <div>{text}</div>}
        </div>
    )
}