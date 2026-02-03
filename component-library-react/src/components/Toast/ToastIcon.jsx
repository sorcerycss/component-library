import { useContext } from "react"
import { ToastContext } from "./Toast"

function SuccessIcon() {
    return (
       <svg
            className="toast-icon-svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function InfoIcon() {
    return (
       <svg
            className="toast-icon-svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function WarningIcon() {
    return (
       <svg
            className="toast-icon-svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ErrorIcon() {
    return (
       <svg
            className="toast-icon-svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const icons = {
    success: SuccessIcon,
    information: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon
}

export default function ToastIcon({ name }) {
    const toastContext = useContext(ToastContext)
    // const { variant } = useContext(ToastContext) || {}
    // "|| {}"" prevents a crash if the context is "null"

    const variant = toastContext?.variant
    // If toastContext exists, give me toastContext.variant
    // If not, return undefined instead of crashing
    // Same as: toastContext && toastContext.variant

    const key = name ?? variant ?? "information"
    // ?? means “use this unless it’s null or undefined”
    // Use name if provided
    // Otherwise use variant
    // Otherwise deafult to "infomration"

    const Icon = icons[key] ?? InfoIcon
    // If the iocn exists, use it
    // Otherwise fall back to InfoIcon

    return <span className="toast-icon"><Icon /></span>
}


