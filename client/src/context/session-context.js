import React, { createContext, useEffect, useState } from 'react';

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    },[]);
    
    const getUser = async () => {
        const res = await fetch('/api/users/');
        const data = await res.json()
        setUser(data.user)
    };

    const _login = async (username, password) => {
        await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
        getUser();
    };

    const _logout = async () => {
        await fetch('/api/users/logout');
        getUser();
    } 

    console.log({user})
    return (
        <SessionContext.Provider value={{
            user,
            _login,
            _logout
            }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;