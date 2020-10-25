import React from 'react'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounterTwo from './components/HookCounterTwo'

/*
    useEffect

        * The Effect hook let you perform side eefects in functional component
        * It is a close replacement for 'componentDidMount, 'componentDidUpdate' and 'componentWillUnmount'
        * 
*/

const Index = () => {
    return (
        <div className="container">
            <ClassCounterOne/>
            <HookCounterOne/>
            <ClassCounterTwo/>
            <HookCounterTwo/>
        </div>
    )
}

export default Index
