import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../context/session-context';

const LinksCard = () => {
    const { myPools } = useContext(SessionContext);

    return (
        <div className='max-w-xs mx-auto  bg-gray-300 shadow rounded mb-10'>
            <div className='w-full bg-blue-900 text-white font-medium text-center rounded-t p-2'>
                My Pools
            </div>
            <div className='p-5'>
            {
                myPools && (
                    myPools.map(pool => {
                        return (
                            <div key={pool._id} className='text-gray-900 font-medium'>
                                <Link to={`/my-pools/${pool.slug}`}>
                                    {pool.name}
                                </Link>
                            </div>
                        )
                    })
                )
            }
            </div>
        </div>
    )
}

export default LinksCard;
