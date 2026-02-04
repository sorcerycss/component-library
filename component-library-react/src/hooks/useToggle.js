// useToggle.js
// Manages boolean state with a toggle function
// Takes: initial value
// Returns: [value, toggle function]

import { useState } from "react";

export default function useToggle(initialValue = false) {

    const [on, setOn] = useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return [on, toggle]
}