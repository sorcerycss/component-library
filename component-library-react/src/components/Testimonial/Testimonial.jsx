import './Testimonial.css'
import quoteIcon from '../../assets/quote-icon.svg'
import dotsPattern from '../../assets/dots-pattern.svg'

export default function Testimonial({ image, logo, name, title, quote }) {
    
    const containerClass = `testimonial-container ${
        image ? 'testimonial-container-img' : 'testimonial-container-logo'
    }`

    const cardClass = `testimonial-card ${
        image ? `testimonial-card-img` : 'testimonial-card-logo'
    }`
    
    return (
        <div className={containerClass}>
            {/* Overlapping person image */}
            {image && (
                <img
                src={image}
                alt="Person photo"
                className='testimonial-img'
              />
            )}

            {/* Card */}
            <div className={cardClass}>
            {/* Logo for non-image version */}
            {logo && (
                <img
                src={logo}
                alt="Company logo"
                className='testimonial-logo'
                />
            )}

            {/* Quote icon for image version */}
            {image && (
                <img
                src={quoteIcon}
                alt="Quote icon"
                className='testimonial-quote-icon'
                />
            )}

            <div className='testimonial-quote'>{quote}</div>
            <div className='testimonial-name'>{name}</div>
            <div className='testimonial-title'>{title}</div>

            {/* Dots pattern for logo version */}
            {logo && (
                <img
                src={dotsPattern}
                alt="Dots pattern"
                className='testimonial-dots'
                />
            )}
            </div>
        </div>
    )
}