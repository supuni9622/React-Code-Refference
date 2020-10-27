import React, {useContext} from 'react'
import { CountContext } from './GlobaleIndex'

const ComponentF = () => {
    const countContext = useContext(CountContext)
    return (
        <div className='p-3 m-3' style={{backgroundColor:'white'}}>
            <h5>Component F</h5>
            <h6> Count Value in local component equal to gloable value - {countContext.countState} </h6>
            <button className="btn btn-outline-success p-1 m-2" onClick={()=> countContext.countDispatch('increment')}>Increment</button>
            <button className="btn btn-outline-warning p-1 m-2" onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
            <button className="btn btn-outline-danger p-1 m-2" onClick={()=> countContext.countDispatch('reset')}>Reset</button> 
        </div>
    )
}

export default ComponentF