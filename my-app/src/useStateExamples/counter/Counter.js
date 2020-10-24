import React from 'react'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'

const Counter = () => {
    return (
        <div className="container">
            <ClassCounter/>
            <HookCounter/>
            <HookCounterTwo/>
            <HookCounterThree/>
        </div>
    )
}

export default Counter
