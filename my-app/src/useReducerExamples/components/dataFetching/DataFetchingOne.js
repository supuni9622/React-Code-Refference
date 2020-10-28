import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetchingOne = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    //Passing empty array ensures that this is calling once
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something Went Wrong')
            })
    },[])

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#beff99'}}>
            <h2 style={{textAlign:'center'}}>Data Fetching with useState hook</h2>
            { loading ? 
                <h5>Loading</h5> 
                : <h3> {post.title} </h3>
            }
            { error ? 
                <h5>{error}</h5>
            : null }            
        </div>
    )
}

export default DataFetchingOne
