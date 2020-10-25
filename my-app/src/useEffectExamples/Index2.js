import React from 'react'
import DataFetch from './components/dataFetching/DataFetch'
import DataFetchTwo from './components/dataFetching/DataFetchTwo'
import DataFetchThree from './components/dataFetching/DataFetchThree'

/*  
    Fetching data from API endpoint
    In the future --> suspence will incharge for data fetching

    We can use fetch API (which is react built in data fetching feature) or axios libraray
*/

const Index2 = () => {
    return (
        <div className='container'>
            <DataFetch/>
            <DataFetchTwo/>
            <DataFetchThree/>
        </div>
    )
}

export default Index2
