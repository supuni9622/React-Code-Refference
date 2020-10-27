import React, {useReducer} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = React.createContext()

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

const GlobaleIndex = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    // In this example we don't need to dispatch method in this component. 
    // We want to use it in child component. So we use ContextAPI and useContext hook

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <div className="p-3 m-3" style={{backgroundColor:'violet'}}>
            <h2 style={{textAlign:'center'}}> Manage Globle Counter Value</h2>
            <h3 style={{textAlign:'center'}}> Count - {count}</h3>
                <ComponentA/>
                <ComponentB/>
                <ComponentC/>
            </div>
        </CountContext.Provider>
    )
}

export default GlobaleIndex
