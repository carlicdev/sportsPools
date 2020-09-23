import React, { useState } from 'react'

const NewPool = () => {
    const [name, setName] = useState('');
    const [league, setLeague] = useState('');
    const [serverMsg, setServerMsg] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('/api/pools/new-pool', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, league})
        });

        const data = await res.json();
        if (res.status === 401) {
            console.log(data)
            setServerMsg({login: data.msg})
        } else if (data.errors) {
            console.log(data)
            setServerMsg(data.errors)
        } else {
            setServerMsg(data.msg)
        }
    }

    console.log({serverMsg})
    return (
        <div>
            <div className='max-w-xs rounded bg-gray-300 shadow mx-auto'>
                <div className='w-full bg-blue-900 text-white font-medium text-center rounded-t p-2'>
                    Create New Pool
                </div>
                <div className='w-full p-5'>
                    <form onSubmit={handleSubmit}>
                        <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-100 mt-2'
                            type='text'
                            name='name'
                            value={name}
                            placeholder='Pool Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                        {
                            (serverMsg && serverMsg.name) && (
                                <div className='text-xs text-red-700 font-thin text-left'>{serverMsg.name}</div>
                            )
                        }
                        <select className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-100 mt-2'
                            name='league'
                            value={league}
                            onChange={(e) => setLeague(e.target.value)}
                        >
                            <option value={''}>-</option>
                            <option value={'NFL'}>NFL</option>
                        </select>
                        {
                            (serverMsg && serverMsg.league) && (
                                <div className='text-xs text-red-700 font-thin text-left'>{serverMsg.league}</div>
                            )
                        }
                        {
                            (serverMsg && serverMsg.login) && (
                                <div className='text-xs text-red-700 font-thin text-left'>{serverMsg.login}</div>
                            )
                        }
                        <button type='submit' className='rounded font-medium py-1 bg-green-600 focus:outline-none  w-full text-gray-100 shadow mt-3 hover:bg-green-700'>
                            CREATE POOL
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPool
