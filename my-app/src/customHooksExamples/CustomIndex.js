import React from 'react'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'

/*
    * Custom hook is basically a javascript function whose name starts with 'use'
    * A custom hook can also call other hook if required
    * Why custom hooks? 
            - Share logic - Alternative to HOCs and render props

*/

const CustomIndex = () => {
    return (
        <div className='container'>
            <h1>Custom Hooks</h1>
            <DocTitleOne/>
            <DocTitleTwo/>
        </div>
    )
}

export default CustomIndex
