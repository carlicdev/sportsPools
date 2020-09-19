import React, { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errors, setErrors] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            let errors = { passwordsDontMatch: 'Passwords don´t match!'};
            setErrors(errors);
            return;
        }
        const res = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, 
                firstname, 
                lastname, 
                email, 
                password})
        });
        const data = await res.json();
        if (res.status === 201) {
            setUsername('');
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setPasswordConfirm('');
            setErrors('');
        }
        if (res.status === 400) {
            setErrors(data.errors);
        }
    }

    return (
        <div className='max-w-sm p-5 bg-blue-900 mx-auto shadow-lg rounded'>
            <form onSubmit={handleSubmit}>
                <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-2'
                    type='text'
                    name='username'
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                {
                    (errors && errors.username) ? <div className='text-blue-200 text-xs text-left'>{errors.username}</div> : null
                }
                <div className='grid grid-cols-2'>
                    <div className='col-span-1'>
                        <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-3'
                            type='text'
                            name='firstname'
                            value={firstname}
                            placeholder='Firstname'
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        {
                            (errors && errors.firstname) ? <div className='text-blue-200 text-xs text-left'>{errors.firstname}</div> : null
                        }
                    </div>
                    <div className='col-span-1'>
                        <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-3'
                            type='text'
                            name='lastname'
                            value={lastname}
                            placeholder='Lastname'
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        {
                            (errors && errors.lastname) ? <div className='text-blue-200 text-xs text-left'>{errors.lastname}</div> : null
                        }
                    </div>
                </div>
                <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-3'
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                {
                    (errors && errors.email) ? <div className='text-blue-200 text-xs text-left'>{errors.email}</div> : null
                }
                <div className='grid grid-cols-2'>
                    <div className='col-span-1'>
                        <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-3'
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {
                            (errors && errors.password) ? <div className='text-blue-200 text-xs text-left'>{errors.password}</div> : null
                        }
                    </div>
                    <div className='col-span-1'>
                        <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-700 mt-3'
                            type='password'
                            name='passwordConfirm'
                            value={passwordConfirm}
                            placeholder='Confirm password'
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        {
                            (errors && errors.passwordsDontMatch) ? <div className='text-blue-200 text-xs text-left'>{errors.passwordsDontMatch}</div> : null
                        }
                    </div>
                </div>
                <button type='submit' className='font-medium rounded py-1 bg-blue-700 focus:outline-none  w-full text-gray-100 shadow mt-2 hover:bg-blue-600'>
                    REGISTER
                </button>
            </form>
        </div>
    )
}

export default SignupForm;
