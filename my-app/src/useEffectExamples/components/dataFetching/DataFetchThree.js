import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

// For this use json Placeholder for data fetching

const DataFetchThree = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    // for button click
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(()=> {

        // axios.get accepts the url and the get request returns a promise 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    //Here fetching data using onClick event rather than onChnage

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#ff9efc'}}>
            <h3> Fetching one post using id with button click - See the difference with above one</h3>

            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <Button type="button" variant='danger' onClick={handleClick}> Fetch Post</Button>

            <h5>{post.title}</h5>
        </div>
    )
}

export default DataFetchThree