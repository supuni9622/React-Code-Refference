import React from 'react'
import FocusInput from './components/FocusInput'
import ClassTimer from './components/ClassTimer'
import HookTimer from './components/HookTimer'

const IndexRef = () => {
    return (
        <div className="container">
            <h2>useRef Hook</h2>
            <FocusInput/>
            <h2>useRef Hook - ClassTimer</h2>
            <ClassTimer/>
            <h2>useRef Hook - HookTimer</h2>
            <HookTimer/>
        </div>
    )
}

export default IndexRef
