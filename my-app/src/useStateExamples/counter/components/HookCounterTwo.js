import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

const HookCounterTwo = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    // First form of updating variable -- but this doesn't increment the value at once
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(count+1)
        }
    }

    /* 
        2nd form of updating variable
        Instead of passing value we pass function that has access to old state value
        This is the safest method (When we have to update the state based on the previous value)
        Good Practise is => Pass a function with prevState instead of passing value

    */
    const incrementTen = () => {
        for(let i=0; i<10; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#ffc5ad'}}>

            <h3 className='mb-2'>Hook Counter Example 2 with more features - using useState Hook</h3>

                <h5 className='p-3' style={{backgroundColor:'#fafc65', textAlign:'center'}}> Count : {count}</h5> 

            <Button variant="dark" onClick={() => setCount(count + 1)} className='m-2'> Increment </Button>
            <Button variant="primary" onClick={() => setCount(count - 1)} className='m-2'> Decrement </Button>
            <Button variant="dark" onClick={() => setCount(initialCount)} className='m-2'> Reset</Button>

            {/* Even this example and HookCounter Example works these two are not a good way to do this */}
            {/* Let's get another two buttons to check other two scenarios */}

            <Button variant="outline-info" onClick={incrementFive} className='m-2'> Increment 5</Button>
            <Button variant="outline-info" onClick={incrementTen} className='m-2'> Increment 10</Button>
        </div>
    )
}

export default HookCounterTwo
