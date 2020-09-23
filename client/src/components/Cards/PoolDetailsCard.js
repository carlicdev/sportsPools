import React from 'react'

const PoolDetailsCard = ({pool}) => {
    return (
        <div className='max-w-xs mx-auto  bg-gray-300 shadow rounded mb-10'>
            <div className='w-full bg-blue-900 text-white font-medium text-center rounded-t p-2'>
                Pool Details
            </div>
            <div className='p-5'>
                <div className='text-justify'>
                    <div className='text-gray-900'>
                        Pool name: <span className='font-medium text-blue-800'>{pool.name}</span>
                    </div>
                    <div className='text-gray-900'>
                        League: <span className='font-medium text-blue-800'>{pool.league}</span>
                    </div>
                    <div className='text-gray-900'>
                        Participants: <span className='font-medium text-blue-800'>{pool.participants.length}</span>
                    </div>
                    <div className='text-gray-900'>
                        Commish: <span className='font-medium text-blue-800'>{pool.commish.username}</span>
                    </div>
                </div>
                <button className='mx-auto mt-2 font-medium bg-green-600 text-gray-100 px-4 py-2 rounded shadow focus:outline-none hover:bg-green-700'>
                    Message Commish
                </button>
            </div>
        </div>
    )
}

export default PoolDetailsCard
