import React, {useState, useEffect} from 'react'

const DocTitleTwo = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return (
        <div className='m-3 p-3' style={{backgroundColor:'whitesmoke'}}>
            <button onClick={()=> setCount(count + 1)}> Count - {count} </button>
        </div>
    )
}

export default DocTitleTwo
