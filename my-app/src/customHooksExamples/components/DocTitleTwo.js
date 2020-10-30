import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

const DocTitleTwo = () => {

    const [count, setCount] = useState(0)

    // Custom Hook
    useDocumentTitle(count)

    return (
        <div className='m-3 p-3' style={{backgroundColor:'whitesmoke'}}>
            <h5> useDocumentTitle custom hook</h5>
            <button onClick={()=> setCount(count + 1)}> Count - {count} </button>
        </div>
    )
}

export default DocTitleTwo
