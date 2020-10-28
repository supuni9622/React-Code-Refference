import React from 'react'

const Title = () => {
    console.log('Rendering Title')

    return (
        <h2 style={{textAlign:'center'}}>
            useCallback Hook
        </h2>
    )
}

// Cover with react.memo to prevent re-rendering without any prop or state chnages
export default React.memo(Title)
