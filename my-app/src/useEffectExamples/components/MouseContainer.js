import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import HookMouse from './HookMouse'


// useEffect with cleanUp 
// Similar to componentWill Unmount life cycle method

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#fffd70'}}>
            
            <Button variant='dark' onClick={()=> setDisplay(!display)}>Toggle display</Button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer

/*
    index.js:1 Warning: Can't perform a React state update on an unmounted component. 
    This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at HookMouse
*/
