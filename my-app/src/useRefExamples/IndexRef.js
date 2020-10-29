import React from 'react'
import FocusInput from './components/FocusInput'
import ClassTimer from './components/ClassTimer'

const IndexRef = () => {
    return (
        <div className="container">
            <h2>useRef Hook</h2>
            <FocusInput/>
            <h2>useRef Hook - ClassTimer</h2>
            <ClassTimer/>
        </div>
    )
}

export default IndexRef
