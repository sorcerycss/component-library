// useTimeout.js/useAutoClose.js
// Handles auto-closing logic with proper cleanup
// Takes: duration, callback
// Returns: nothing (just handles the side effect)

// Hints:

// Takes: callback function and delay in milliseconds
// Uses: useEffect to set up the timeout
// Must clean up the timeout when component unmounts
// Look up how to clear a timeout in JavaScript

import { useEffect } from "react";

export default function useTimeout(callback, delay) {
    useEffect(() => {
        const timeoutId = setTimeout(callback, delay)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [callback, delay])
}