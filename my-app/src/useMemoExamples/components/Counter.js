import React, {useState, useMemo} from 'react'

const Counter = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i =0
        while(1 < 200000000) i++ 
        return counterOne % 2 === 0
    },[counterOne])

    // const isEven = () => {
    //     let i =0
    //     while(1 < 200000000) i++ 
    //     return counterOne % 2 === 0
    // }

    return (
        <div style={{textAlign:'center', backgroundColor:'#aaff75'}}>
            <div className='m-3 p-3'>
                <button onClick={incrementOne}> Count One - {counterOne} </button>
                
                {/* Now isEven is a catch value instead of a function call */}
                <span className='m-2'>{ isEven() ? 'Even' : 'Odd' }</span>
            </div>
            <div className='m-3 p-3'>
            <button onClick={incrementTwo}> Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
