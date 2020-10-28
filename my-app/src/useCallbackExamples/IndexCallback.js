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

*/

const IndexCallback = () => {
    return (
        <div className="container">
            <ParentComponent/>
        </div>
    )
}

export default IndexCallback
