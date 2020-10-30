import React, {useState, useEffect} from 'react'

const DocTitleOne = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return (
        <div className='m-3 p-3' style={{backgroundColor:'wheat'}}>
            <button onClick={()=> setCount(count + 1)}> Count - {count} </button>
        </div>
    )
}

export default DocTitleOne
