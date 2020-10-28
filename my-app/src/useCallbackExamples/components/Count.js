import React from 'react'

const Count = ({text, count}) => {

    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

// Cover with react.memo to prevent re-rendering without any prop or state chnages
export default React.memo(Count)
