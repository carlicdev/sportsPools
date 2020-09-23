import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../context/session-context';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { _login } = useContext(SessionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        _login(username, password);
        setUsername('');
        setPassword('');
    }

    return (
        <div className='max-w-sm p-5 mx-auto'>
            <form onSubmit={handleSubmit}>
                <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-100 mt-2' 
                    type='text'
                    name='username'
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-100 mt-2' 
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='text-right text-xs font-thin text-gray-800'>
                    Forgot password?
                </div>
                <button type='submit' className='rounded font-medium py-1 bg-green-600 focus:outline-none  w-full text-gray-100 shadow mt-2 hover:bg-green-700'>
                    LOGIN
                </button>
                <div className='text-gray-800 text-sm mt-2 '>
                    <Link to='/signup'>
                        Create New Account
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
