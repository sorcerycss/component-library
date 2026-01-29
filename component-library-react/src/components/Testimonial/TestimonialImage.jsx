export default function TestimonialImage({mobileSrc, desktopSrc, alt = "Person photo"}) {
    return (
        <div className="testimonial-img-wrapper">
            <picture>
                <source media="(min-width: 768px)" srcSet={desktopSrc} />
                    <img
                        src={mobileSrc}
                        alt={alt}
                        className="testimonial-img"
                    />
            </picture>
        </div>
    )
}