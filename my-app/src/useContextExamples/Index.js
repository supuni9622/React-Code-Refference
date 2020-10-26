import React from 'react'
import ComponentC from './components/ComponentC'

/*
    * Normaly we have to pass data from a component to other component as props
    * But it become a problem when we have to pass data from highest level component to lowest level. ( We have to pass through intermediate components even they don't need that props)
    * Authenticated users, labguage preference ect. are used in several components

    * Context provides a way to pass data through the component tree without 
      having to pass down manually at every level

      3 STEPS WHEN MAKING CONTEXT

      Step 1 --> Create the context
*/

export const UserContext = React.createContext()

const IndexContext = () => {
    return (
        <div className="container">
            <UserContext.Provider value={'Supuni'}>
                <ComponentC/>
            </UserContext.Provider>
        </div>
    )
}

export default IndexContext
