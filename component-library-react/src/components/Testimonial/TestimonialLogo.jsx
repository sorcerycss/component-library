export default function TestimonialLogo({src, alt = "Company logo"}) {
    return (
        <img
            src={src}
            alt={alt}
            className="testimonial-logo"
        />
    )
}