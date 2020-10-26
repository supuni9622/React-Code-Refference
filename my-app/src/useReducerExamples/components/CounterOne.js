import React, {useReducer} from 'react'

// Step 1 --> define initial state
const initialState = 0

// Reduce() accepts state and action then do some action on state then return newState
// For this example we have 3 actions that are increment,decrement and reset


// Step 2 --> define reducer function
const reducer = (state, action) => {
    switch(action) {
        case 'increment': 
           return state + 1
        case 'decrement' : 
            return state - 1
        case 'reset' : 
            return initialState 
        default : 
            return state
    }
}

const CounterOne = () => {

    // Step 3 --> get to use 
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#c9ffbf'}}>
            <h3> Count - {count}</h3>
            <button className="btn btn-outline-success p-1 m-2" onClick={()=> dispatch('increment')}>Increment</button>
            <button className="btn btn-outline-warning p-1 m-2" onClick={()=> dispatch('decrement')}>Decrement</button>
            <button className="btn btn-outline-danger p-1 m-2" onClick={()=> dispatch('reset')}>Reset</button> 
        </div>
    )
}

export default CounterOne
