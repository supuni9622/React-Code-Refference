import React, {useState, useEffect} from 'react'
import axios from 'axios'

// For this use json Placeholder for data fetching

const DataFetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {

        // axios.get accepts the url and the get request returns a promise 
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#deff85'}}>
            <h3> Fetching data using axios and useEffect hook</h3>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetch
