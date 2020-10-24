import React from 'react'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'

/*
    Summary - useState

    * The useState hook lets you add state to functional components
    * In classes, the state is always an object
    * With the useState hook, the state doesn't have to be an object. It can be object, string, boolean, number or array
    * The useState hook returns an array with 2 elements.
    * The first element is the current value of state, and the second element is a state setter function.
    * New state value depends on the previous state value? You cn pass a function to the setter function.
    * When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.
    
*/

const Counter = () => {
    return (
        <div className="container">
            <ClassCounter/>
            <HookCounter/>
            <HookCounterTwo/>
            <HookCounterThree/>
            <HookCounterFour/>
        </div>
    )
}

export default Counter
