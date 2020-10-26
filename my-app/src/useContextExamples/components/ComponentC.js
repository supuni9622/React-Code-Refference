import React from 'react'
import ComponentD from './ComponentD'
import ComponentF from './ComponentF'

const ComponentC = () => {
    return (
        <div className='p-3' style={{backgroundColor: '#d6fff0'}}>
            <ComponentD/>
            <ComponentF/>
        </div>
    )
}

export default ComponentC
