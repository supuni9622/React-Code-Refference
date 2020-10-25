import React from 'react'
import DataFetch from './components/dataFetching/DataFetch'

/*  
    Fetching data from API endpoint
    In the future --> suspence will incharge for data fetching

    We can use fetch API (which is react built in data fetching feature) or axios libraray
*/

const Index2 = () => {
    return (
        <div className='container'>
            <DataFetch/>
        </div>
    )
}

export default Index2
