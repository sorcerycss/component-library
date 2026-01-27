import { useTestimonialContext } from "./Testimonial"

export default function TestimonialCard({children}) {
    const {variant} = useTestimonialContext()

    const cardClass = `testimonial-card ${
        variant === 'image' ? 'testimonial-card-img' : 'testimonial-card-logo'
    }`

    return <div className={cardClass}>{children}</div>
}