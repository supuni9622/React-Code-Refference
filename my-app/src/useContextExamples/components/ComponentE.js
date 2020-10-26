import React from 'react'
import {UserContext, ChannelContext} from '../Index'

// This nested consumers is not a good practise
// Most suitable and easy way is useContext hook

const ComponentE = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div className="m-3 p-4" style={{backgroundColor:'#a7fca8'}}>
                                                <h1>User context value : {user} </h1>
                                                <h1> Channel Context Value : {channel}</h1>
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentE
