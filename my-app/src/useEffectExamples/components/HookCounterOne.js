import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const HookCounterOne = () => {

    const [count, setCount] = useState(0)

    /*
        * When we specify useEffect, we are basicaly request in React to execute a function 
          that is pass as an argument everytime the component renders
        * useEffect run after every render of the component
    */
    useEffect(()=> {
        document.title = `You clicked ${count} times`
    })

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#f1b6fa'}}>
            <h6 className='m-3'>With useEffect hook</h6>
            <Button variant='success' onClick={()=> setCount(count + 1)}>
                Click {count} times
            </Button>
        </div>
    )
}

export default HookCounterOne
