import React, {useReducer} from 'react'

const initialState = 0

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

const CounterThree = () => {

    // We can use multiple useReducers
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    // Now both two counters working independently even we use same pease of code

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#a9cfcf', textAlign:'center'}}>
            <div>
                <h3> Count One- {count}</h3>
                <button className="btn btn-success p-1 m-2" onClick={()=> dispatch('increment')}>Increment</button>
                <button className="btn btn-warning p-1 m-2" onClick={()=> dispatch('decrement')}>Decrement</button>
                <button className="btn btn-danger p-1 m-2" onClick={()=> dispatch('reset')}>Reset</button> 
            </div>
            <div>
                <h3> Count Two - {countTwo}</h3>
                <button className="btn btn-success p-1 m-2" onClick={()=> dispatchTwo('increment')}>Increment</button>
                <button className="btn btn-warning p-1 m-2" onClick={()=> dispatchTwo('decrement')}>Decrement</button>
                <button className="btn btn-danger p-1 m-2" onClick={()=> dispatchTwo('reset')}>Reset</button> 
            </div>
        </div>
    )
}

export default CounterThree