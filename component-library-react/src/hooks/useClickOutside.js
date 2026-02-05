// Requirements:

// Takes 2 parameters: a ref and a callback function
// Listens for clicks on the document
// If click is outside the ref element, run the callback
// Clean up the listener when component unmounts

// Hints:

// Use useEffect to add event listener
// Use ref.current.contains(event.target) to check if click is inside
// Remember to remove listener in cleanup function

import { useEffect } from "react"

export default function useClickOutside(ref, callback, isActive = true) {

    useEffect(() => {
        // only set up listener if isActive is true
        if (!isActive) return

        // create function that handles clicks
        function handleClick(event) {
            // check if click is outside the ref
            // if ref exist and click is outside (!)
            if(ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }

        // add event listener
        document.addEventListener('click', handleClick)

        // cleanup: remove listener when component unmounts
        return () => {
            document.removeEventListener('click', handleClick)
        }

        // dependancies
    }, [ref, callback, isActive])
}