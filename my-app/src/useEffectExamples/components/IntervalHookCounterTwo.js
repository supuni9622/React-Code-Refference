import React, {useState, useEffect} from 'react'

const IntervalHookCounterTwo = () =>{

    const [count, setCount] = useState(0)

    const tick = () => {

        // Get previous count and then we can remove count dependency from useEffect hook
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {

        /* Even if we can define this function outside the useEffect and call inside the useEffect,
            sometimes it may lead to forget about the dependency. So the safest way is define the function 
            inside the useEffect and call it as well as put currect dependencies.
        */
        const doSomething = () => {
            console.log("some prop" + count)
        }
        doSomething()
        
        const interval = setInterval(tick, 1000)
        return ()=> {
            clearInterval(interval)
        }
    }, [count])

    /*
        We can use multiple useEffect calls withing the same component 
    */

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#000324'}}>
            <h3 style={{color:'#ffffff' , textAlign:'center'}}> Interval Hook Counter Two - Second form {count}</h3>
        </div>
    )
}

export default IntervalHookCounterTwo
