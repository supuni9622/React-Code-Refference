import React from 'react'
import DataFetchingOne from './DataFetchingOne'

const DataFetchingIndex = () => {
    return (
        <div className="p-3 m-3" style={{backgroundColor:"wheat"}}>
            <h2 style={{textAlign:'center'}}>Data Fetching with useReducer</h2>
            <DataFetchingOne/>
        </div>
    )
}

export default DataFetchingIndex
