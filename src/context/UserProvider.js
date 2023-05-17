import React, { createContext, useState }  from 'react'


const UserContext = createContext()



export const UserProvider = ({ children  }) => {

    const [newUser, setNewUser] = useState()

    return(
        <UserContext.Provider value={{
            newUser,
            setNewUser
        }}>

            { children }
            
        </UserContext.Provider>
    )
}


export default UserContext;