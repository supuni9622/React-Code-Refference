import React from 'react'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounterTwo from './components/HookCounterTwo'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import IntervalHookCounterTwo from './components/IntervalHookCounterTwo'

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
            <ClassMouse/>
            <HookMouse/>
            <MouseContainer/>
            <IntervalClassCounter/>
            <IntervalHookCounter/>
            <IntervalHookCounterTwo/>
        </div>
    )
}

export default Index
