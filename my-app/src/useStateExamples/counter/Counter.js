import React from 'react'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'

const Counter = () => {
    return (
        <div className="container">
            <ClassCounter/>
            <HookCounter/>
        </div>
    )
}

export default Counter
