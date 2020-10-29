import React, {useEffect, useRef} from 'react'

const FocusInput = () => {

    const inputRef = useRef(null)

    useEffect(()=> {
        //Focus input element
        inputRef.current.focus()
    },[])

    return (
        <div style={{backgroundColor:'#f1ff75'}}>
            <input ref ={inputRef} type ="text"></input>
        </div>
    )
}

export default FocusInput
