import React, {useReducer} from 'react'

// Here we use state object instead of direct value
const initialState = {
    firstCounter : 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
           return { firstCounter: state.firstCounter + 1}
        case 'decrement' : 
            return { firstCounter: state.firstCounter -1 }
        case 'reset' : 
            return initialState
        default : 
            return state
    }
}

const CounterTwo = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#f9f89f'}}>
            <h3> Count - {count.firstCounter}</h3>
            <button className="btn btn-outline-success p-1 m-2" onClick={()=> dispatch( {type: 'increment'})}>Increment</button>
            <button className="btn btn-outline-warning p-1 m-2" onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
            <button className="btn btn-outline-danger p-1 m-2" onClick={()=> dispatch({type: 'reset'})}>Reset</button> 
        </div>
    )
}

export default CounterTwo

/*
    What is the advantage of using this pattern?
        * When we have more than one property
*/