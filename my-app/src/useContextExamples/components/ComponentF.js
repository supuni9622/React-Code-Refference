import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../Index'

const ComponentF = () => {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div className="jumbotrone p-4 m-3" style={{backgroundColor: '#f5ff8a'}}>
            <h1>This is UserContext and ChannelContext consume using useContext</h1>
            <h3>User Context value: {user}</h3>
            <h3>Channel Context value: {channel}</h3>
        </div>
    )
}

export default ComponentF
