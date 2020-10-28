import React from 'react'
import ParentComponent from './components/ParentComponent'

/*
    Performance optimisation

        * Here used console.log() statements for checking it. 
        * We saw that every component re-rendered after clicking a button and it's unnccessary.
        * To optimse this we use react.memo
        * 
        *  React.memo ------ Higher order component that will prevent a functional component from being re-rendered
            if it's prop or states do not change

        * useCallback hook ---------------
        *       What ?
        *       useCallback is a hook that will return a memorized version of the callback function that only 
                changes if one of the dependencies has changed. 
        *       Why ?
        *       It is useful when passing callbacks to optimse child components that rely on reference equality to 
        *       prevent unneccesary renders.
        *       How ?
        *       1. Import from react
        *       2. call useCallback which accepts callback function as the first parameter and array of dependencies as second parameter

*/

const IndexCallback = () => {
    return (
        <div className="container">
            <ParentComponent/>
        </div>
    )
}

export default IndexCallback
