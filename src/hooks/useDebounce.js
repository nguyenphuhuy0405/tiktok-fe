import { useState, useEffect } from 'react'

function useDebounce(value, delay = 500) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => setDebounceValue(value), delay)
        return () => {
            clearTimeout(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debounceValue
}

export default useDebounce
