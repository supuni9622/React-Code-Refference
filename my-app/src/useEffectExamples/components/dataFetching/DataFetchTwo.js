import React, {useState, useEffect} from 'react'
import axios from 'axios'

// For this use json Placeholder for data fetching

const DataFetchTwo = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(()=> {

        // axios.get accepts the url and the get request returns a promise 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#b1b7fc'}}>
            <h3> Fetching one post using id</h3>

            <input type="text" value={id} onChange={e => setId(e.target.value)}/>

            <h5>{post.title}</h5>
        </div>
    )
}

export default DataFetchTwo
