import React, {useState} from 'react'

const UserForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }
    return (
        <div className='m-3 p-3' style={{backgroundColor:'#cccccc'}}>
            <form onSubmit={submitHandler} className='p-3 m-2'>
                <div>
                    <label>First Name</label>
                    <input value={firstName} onChange = {e => setFirstName(e.target.value)} type='text'/> 
                </div>
                <div>
                    <label>Second Name</label>
                    <input value={lastName} onChange = {e => setLastName(e.target.value)} type='text'/> 
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default UserForm
