import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () =>{

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        
        const interval = setInterval(tick, 1000)

        return ()=> {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#000324'}}>
            <h3 style={{color:'#ffffff' , textAlign:'center'}}> Interval Hook Counter {count}</h3>
        </div>
    )
}

export default IntervalHookCounter
