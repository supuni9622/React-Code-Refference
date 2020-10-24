import React from 'react'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'

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
        </div>
    )
}

export default Index
