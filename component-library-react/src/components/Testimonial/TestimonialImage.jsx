export default function TestimonialImage({src, alt = "Person photo"}) {
    return (
        <img
            src={src}
            alt={alt}
            className="testimonial-img"
        />
    )
}