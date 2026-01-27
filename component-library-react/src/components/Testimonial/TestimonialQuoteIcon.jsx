import quoteIcon from '../../assets/quote-icon.svg'

export default function TestimonialQuoteIcon(alt = "Quote icon") {
    return (
        <img
            src={quoteIcon}
            alt={alt}
            className="testimonial-quote-icon"
        />
    )
}