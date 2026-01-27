import './Banner.css'

export default function Banner({ variant = 'neutral', children }) {
    return <div className={`banner banner-${variant}`}>{children}</div>
}