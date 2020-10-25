import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const HookCounterOne = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

   /*
            Conditionaly rendering - passing dependencies as array
            This is an optimisation technique
   */
    useEffect(()=> {

        console.log("useEffect update fixed conditionaly rendering")
        document.title = `You clicked ${count} times`

    }, [count])

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#d8d6ff'}}>

            <h6 className='m-3'>With useEffect hook</h6>

            <input 
                    type='text' 
                    value={name} 
                    onChange={e => {setName(e.target.value)}}
                />
            <Button variant='dark' onClick={()=> setCount(count + 1)}>
                Click {count} times
            </Button>
        </div>
    )
}

export default HookCounterOne
