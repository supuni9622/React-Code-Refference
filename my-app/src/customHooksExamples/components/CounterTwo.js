import React, {useState} from 'react'

const CounterTwo = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#12ccab', textAlign:'center'}}>
            <h4> Count = {count} </h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo