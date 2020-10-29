import React from 'react'
import Counter from './components/Counter'

/*
        * useMemo is a hook that will only recompute the catched value when one of the dependencies has changed
        * Difference between useCallback and useMemo
        *       - useCallback catches the provided function instance itselft wheres useMemo invokes the provided function and catched it's result
        *       - So if you want to catched the function --- useCallback()
        *       - if you want catched the result  ----- useMemo()
*/

const IndexMemo = () => {
    return (
        <div className='container'>
            <h2 style={{textAlign:'center'}}> useMemo</h2>
            <Counter/>
        </div>
    )
}

export default IndexMemo
