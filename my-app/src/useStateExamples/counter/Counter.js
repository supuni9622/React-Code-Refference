import React from 'react'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'

const Counter = () => {
    return (
        <div className="container">
            <ClassCounter/>
            <HookCounter/>
            <HookCounterTwo/>
        </div>
    )
}

export default Counter
