import {useEffect} from 'react'

// We can omit React since we are not using JSX here. However in React 17 we don't need to import React to use JSX
const useDocumentTitle = (count) => {

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle
