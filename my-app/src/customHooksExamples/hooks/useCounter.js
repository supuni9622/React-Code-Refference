import {useState} from 'react'

// Can customise the intial value by passing it as parameter
// Add second parameter as value
const useCounter = (initialCount = 0, value) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
 
    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
