import React from 'react'
import useInput from '../hooks/useInput'

const UserForm = () => {

    // Using useInput custom hook
    const [firstName,bindFirstName, resetFirstName] = useInput('')
    const [lastName,bindLastName, resetLastName] = useInput('')      

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div className='m-3 p-3' style={{backgroundColor:'#cccccc'}}>
            <form onSubmit={submitHandler} className='p-3 m-2'>
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName} type='text'/> 
                </div>
                <div>
                    <label>Second Name</label>
                    <input {...bindLastName} type='text'/> 
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default UserForm
