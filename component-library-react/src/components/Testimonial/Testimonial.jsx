import { createContext, useContext } from 'react'
import './Testimonial.css'

const TestimonialContext = createContext()

export function useTestimonialContext() {
    const context = useContext(TestimonialContext)
    return context
}

export default function Testimonial({ variant = "logo", children }) {
    
    const containerClass = `testimonial-container ${
        variant === 'image' ? 'testimonial-container-img' : 'testimonial-container-logo'
    }`
    
    return (
        <TestimonialContext.Provider value={{ variant }}>
            <div className={containerClass}>{children}</div>
        </TestimonialContext.Provider>
    )
}