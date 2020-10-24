import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

/*
    Two Rules we should remember using hooks
        1. "Only call hooks at the top level"
         - Don't call hooks inside loops, conditions, or nested functions

        2. "Only call hooks from React functions "
          -  Call them from within react functional components and not just any regular JS function
*/

const HookCounter = () => {

    //Use state is a function which returns initial value as well as updated value
    //This is called array destruction which is a feature of ES6
    const [count, setCount] = useState(0)

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#85d2ff'}}>

            <h3 className='mb-2'>Hook Counter Example - using useState Hook</h3>

            {/* If we don't use function call to onClick it returns a infinite loop */}
            <Button variant="secondary" onClick={() => setCount(count + 1)}>Count {count} </Button>

        </div>
    )
}

export default HookCounter
