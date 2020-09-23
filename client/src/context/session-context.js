import React, { createContext, useEffect, useState } from 'react';

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [myPools, setMyPools] = useState(null);

    useEffect(() => {
        getUser();
    },[]);
    
    const getUser = async () => {
        const res = await fetch('/api/users/');
        const data = await res.json()
        if (data.user) {
            setUser(data.user.username);
            setMyPools(data.user.pools);
        } else {
            setUser(null);
            setMyPools(null);
        }
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

    return (
        <SessionContext.Provider value={{
            user,
            myPools,
            _login,
            _logout
            }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;