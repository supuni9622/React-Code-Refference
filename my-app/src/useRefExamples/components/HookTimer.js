import React, {useState, useEffect, useRef} from 'react'

const HookTimer = () => {

    const [timer, setTimer] = useState(0)

    /*
        useRef is used to access DOM nodes as well as store any mutable value(does not cause re-renders)
    */

    const intervalRef = useRef()

    useEffect(() => {
        // const interval = setInterval(()=> {
        //     setTimer(prevTimer => prevTimer + 1)
        // }, 1000)

        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            // clearInterval(interval)
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div className='m-3 p-3' style={{backgroundColor:'#ffc8ab'}}>
            <h3>Hook Timer - {timer} </h3>
            {/* In this functional component if we use like this we will get an error since the scope of interval is only useEffect hook. So we have to use useRef()
            <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button> */}

            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button> 

        </div>
    )
}

export default HookTimer
