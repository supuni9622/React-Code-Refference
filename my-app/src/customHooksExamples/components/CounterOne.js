import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterOne = () => {

    const [count, increment, decrement, reset] = useCounter(0, 1)

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#12ff12', textAlign:'center'}}>
            <h4> Count = {count} </h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
