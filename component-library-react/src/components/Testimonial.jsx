export default function Testimonial({ image, logo, name, title, quote }) {
    return (
        <div>
            {image && <img src={image} alt="Person photo" />}
            {logo && <img src={logo} alt="Company logo" />}
            <div>{quote}</div>
            <div>{name}</div>
            <div>{title}</div>
        </div>
        
    )
}