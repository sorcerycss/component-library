import './Badge.css'

export default function Badge({children, variant = 'gray', shape = 'square'}) {
    return (
        <span className={`badge badge-${variant} badge-${shape}`}>
            {children}
        </span>
    )
}