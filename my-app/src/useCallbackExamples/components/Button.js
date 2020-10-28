import React from 'react'

const Button = ({handleClick, children}) => {

    console.log('Rendering button - ', children)

    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

// Cover with react.memo to prevent re-rendering without any prop or state chnages
export default React.memo(Button)
