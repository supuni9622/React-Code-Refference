import React, {useReducer} from 'react'

// State as an object
const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

// Now we have two properties in the state object but changing only one at a time 
// To get the expected output we have to modify the return statement to merge the state properties - use spread operator
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
           return { ...state, firstCounter: state.firstCounter + action.value} // Action as an object
        case 'decrement' : 
            return { ...state, firstCounter: state.firstCounter - action.value }

        // These are for counterTwo
        case 'increment2': 
            return { ...state, secondCounter: state.secondCounter + action.value} // Action as an object
         case 'decrement2' : 
             return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset' : 
            return initialState
        default : 
            return state
    }
}

const CounterTwo = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#f9f89f', textAlign:'center'}}>
            <h3> First Count - {count.firstCounter}</h3>
            <h3> Second Counter - {count.secondCounter} </h3>
            <div>
                <button className="btn btn-outline-success p-1 m-2" onClick={()=> dispatch( {type: 'increment', value: 1 })}>
                    Increment
                </button>
                <button className="btn btn-outline-warning p-1 m-2" onClick={()=> dispatch({type: 'decrement', value: 1 })}>
                    Decrement
                </button>
                <button className="btn btn-outline-primary p-1 m-2" onClick={()=> dispatch( {type: 'increment', value: 5 })}>
                    Increment
                </button>
                <button className="btn btn-outline-secondary p-1 m-2" onClick={()=> dispatch({type: 'decrement', value: 5 })}>
                    Decrement
                </button>
            </div>

            {/* For counter two  */}
            <div>
                <button className="btn btn-outline-success p-1 m-2" onClick={()=> dispatch( {type: 'increment2', value: 1 })}>
                    Increment Counter 2
                </button>
                <button className="btn btn-outline-warning p-1 m-2" onClick={()=> dispatch({type: 'decrement2', value: 1 })}>
                    Decrement Counter 2
                </button>
            </div>

            <button className="btn btn-outline-danger p-1 m-2" onClick={()=> dispatch({type: 'reset', value: 1 })}>
                Reset
            </button> 
        </div>
    )
}

export default CounterTwo

/*
    What is the advantage of using this pattern?
        * When we have action as an object we can use additional data (properties)
        * When we use state as an object, we are able to keep track of multiple state variables
*/