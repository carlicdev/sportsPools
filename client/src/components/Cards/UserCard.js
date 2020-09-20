import React, { useContext } from 'react'
import { SessionContext } from '../../context/session-context'
import LoginForm from '../UserForms/LoginForm';

const UserCard = () => {
    const { user, _logout } = useContext(SessionContext);

    return (
        <div className='max-w-xs mx-auto  bg-gray-300 shadow rounded mb-10'>
            <div className='w-full bg-blue-900 text-white font-medium text-center rounded-t p-2'>
                Account
            </div>
            {
                user ? (
                    <div className='p-5'>
                        <div className='font-medium text-gray-900'>Welcome <span>{user}</span></div>
                        <button className='bg-red-500 hover:bg-red-600 px-2 py-1 rounded shadow focus:outline-none text-gray-100 text-xs font-medium mt-1'
                                onClick={_logout}
                        >
                            LOGOUT
                        </button>
                    </div>
                ) : (
                    <LoginForm />
                )
            }
        </div>
    )
}

export default UserCard
