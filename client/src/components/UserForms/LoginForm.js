import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
        console.log(res);
    }

    return (
        <div className='max-w-sm p-5 bg-blue-900 rounded shadow-lg mx-auto'>
            <form onSubmit={handleSubmit}>
                <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-2' 
                    type='text'
                    name='username'
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-2' 
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='rounded font-medium py-1 bg-blue-700 focus:outline-none  w-full text-gray-100 shadow mt-2 hover:bg-blue-600'>
                    LOGIN
                </button>
            </form>
        </div>
    )
}

export default LoginForm;
