import quoteIcon from '../assets/quote-icon.png'
import dotsPattern from '../assets/dots-pattern.png'

export default function Testimonial({ image, logo, name, title, quote }) {
    return (
        <div style={{
            position: 'relative',
            paddingTop: image ? '90px' : '0',
            marginTop: '40px',
            maxWidth: '376px',
            minHeight: image ? '654px' : '552px'
        }}>
           
            {/* Overlapping person image */}
            {image && (
                <img
                src={image}
                alt="Person photo"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '344px',
                    height: '206px',
                    borderRadius: '12px',
                    objectFit: 'cover'
                }}
              />
            )}

            {/* Blue card */}
            <div style={{
                backgroundColor: image ? '#2545B8' : '#F9FAFB',
                color: image ? 'white' : '#1F2937',
                padding: '140px 20px 20px',
            }}>

            {/* Show image/logo logic */}
            {logo && <img src={logo} alt="Company logo" />}

            {/* Show quote icon if there's an image */}
            {image && <img src={quoteIcon} alt="Quote icon" />}

            <div style={{
                fontSize: '24px',
                fontWeight: '500',
                margin: '24px 16px'
            }}>{quote}</div>
            <div style={{
                fontWeight: '700',
                margin: '24px 16px 0'
            }}>{name}</div>
            <div style={{
                fontWeight: '500',
                margin: '0 16px 0'
            }}>{title}</div>

            {/* Show dots pattern if there's a logo */}
            {logo && <img src={dotsPattern} alt="Dots pattern" /> }

            </div>

        </div>
        
    )
}