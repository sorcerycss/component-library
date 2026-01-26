import './Card.css'

export default function Card({ icon, title, text, hover = false }) {
    return (
        <div className='card-container'>
            <div className='card'>
                <img
                src={icon}
                alt='Deploy icon'
                className={hover ? 'card-icon card-icon-hover' : 'card-icon'}  />
                <div className='card-title'>{title}</div>
                <div className='card-text'>{text}</div>
            </div>
        </div>
    )
}