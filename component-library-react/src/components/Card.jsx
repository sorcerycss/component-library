export default function Card({ icon, title, text }) {
    return (
        <div style={{
            textAlign: 'center',
            background: '#F9FAFB',
            color: '#6B7280',
            borderRadius: '8px',
            }}>
            <img src={icon} alt="Deploy icon" />
            <div>{title}</div>
            {text}
        </div>
    )
}