import React, {useState,useEffect} from 'react'

const  HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    // Empty array tells that this perticular effect does not depend on any props or state 
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#4dff6d'}}>
            <h5> Mouse Coordination with useEffect</h5>
                <h6>X - {x}  Y - {y} </h6>
        </div>
    )
}

export default HookMouse
