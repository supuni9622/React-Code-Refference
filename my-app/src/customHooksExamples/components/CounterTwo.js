import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterTwo = () => {

    // Using useCounter custom hook
    // use initial value as 10 
    const [count, increment, decrement, reset] = useCounter(10, 5)

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