import React, {useEffect, useRef} from 'react'

const FocusInput = () => {

    const inputRef = useRef(null)

    useEffect(()=> {
        //Focus input element
        inputRef.current.focus()
    },[])

    return (
        <div>
            <input ref ={inputRef} type ="text"></input>
        </div>
    )
}

export default FocusInput
