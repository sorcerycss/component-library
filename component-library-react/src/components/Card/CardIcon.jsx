export default function CardIcon({src, alt = "Upload", hover = false}) {
    return (
        <img
        src={src}
        alt={alt}
        className={hover ? "card-icon card-icon-hover" : "card-icon"}
        />
    )
}