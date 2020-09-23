import React, { useState } from 'react'

const JoinPool = () => {
    const [poolId, setPoolId] = useState('');
    const [serverMsg, setServerMsg] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('/api/pools/join-pool', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({poolId})
        });
        const data = await res.json();
        if (res.status !== 201) {
            setServerMsg(data.msg)
        } else {
            setServerMsg(null);
        }
    }

    return (
        <div>
            <div className='max-w-xs rounded bg-gray-300 shadow mx-auto'>
                <div className='w-full bg-blue-900 text-white font-medium text-center rounded-t p-2'>
                    Join Private Pool
                </div>
                <div className='w-full p-5'>
                    <form onSubmit={handleSubmit}>
                        <input className='w-full rounded focus:outline-none focus:shadow-outline p-1 border border-blue-100 mt-2'
                            type='text'
                            name='poolId'
                            value={poolId}
                            placeholder='Pool ID'
                            onChange={(e) => setPoolId(e.target.value)}
                        />
                        {
                            serverMsg && <div className='text-xs text-red-700 font-thin text-left'>{serverMsg}</div>
                        }
                        <button type='submit' className='rounded font-medium py-1 bg-green-600 focus:outline-none  w-full text-gray-100 shadow mt-3 hover:bg-green-700'>
                            JOIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JoinPool
