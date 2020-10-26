import React from 'react'
import {UserContext} from '../Index'

const ComponentE = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <div className="m-3 p-4" style={{backgroundColor:'#a7fca8'}}>User context value : {user} </div>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentE
