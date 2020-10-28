import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error : '',
    post : []
}

/*  We can see two clear actions in axios fetching in DataFetchOne.js
    For useReducer case we take those actions as action types in reducer function
    And we set states acording to those actions here 
 */
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS' : 
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'FETCH_ERROR' : 
            return {
                loading: false,
                post : {},
                error : 'Something Went Wrong'
            }
        default : 
            return state
    }
}

const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({
                    type : 'FETCH_SUCCESS',
                    payload : res.data})
            })
            .catch(error => {
                dispatch({
                    type : 'FETCH_ERROR'})
            })
    },[])

    return (
        <div className='p-3 m-3' style={{backgroundColor:'#bdbce0'}}>
            <h2 style={{textAlign:'center'}}>Data Fetching with useReducer hook</h2>
            { state.loading ? 
                <h5>Loading</h5> 
                : <h3> {state.post.title} </h3>
            }
            { state.error ? 
                <h5>{state.error}</h5>
            : null }            
        </div>
    )
}

export default DataFetchingTwo
