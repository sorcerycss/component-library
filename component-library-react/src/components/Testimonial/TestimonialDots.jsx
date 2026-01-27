import dotsPattern from '../../assets/dots-pattern.svg'

export default function TestimonialDots({alt = "Dots pattern"}) {
    return (
        <img
            src={dotsPattern}
            alt={alt}
            className="testimonial-dots"
        />
    )
}