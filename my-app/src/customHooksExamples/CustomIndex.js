import React from 'react'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import UserForm from './components/UserForm'

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
            <div>
                <h2>First Custom Hook Example</h2>
                <DocTitleOne/>
                <DocTitleTwo/>
            </div>
            <div>
                <h2>Second Custom Hook Example</h2>
                <CounterOne/>
                <CounterTwo/>
            </div>
            <div>
                <h2>Third Custom Hook Example</h2>
                <UserForm/>
            </div>
            
        </div>
    )
}

export default CustomIndex
