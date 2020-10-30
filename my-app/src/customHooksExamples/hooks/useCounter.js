import {useState} from 'react'

// Can customise the intial value by passing it as parameter
const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
 
    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
