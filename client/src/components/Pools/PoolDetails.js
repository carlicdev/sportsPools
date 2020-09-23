import React, { useEffect, useState } from 'react'
import PoolDetailsCard from '../Cards/PoolDetailsCard';
import Participants from './Participants';

const PoolDetails = ({match}) => {
    const [pool, setPool] = useState(null);

    useEffect(() => {
        const getPool = async () => {
            const res = await fetch(`/api/pools/${match.params.slug}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();
            setPool(data.pool);
        }
        getPool();
    }, [match.params.slug])

    return (
        <div>
            <h1>Hello from pool details</h1>
            {
                pool && (
                    <div>
                        <PoolDetailsCard pool={pool} />
                        <Participants participants={pool.participants} />
                    </div>
                )
            }
        </div>
    )
}

export default PoolDetails
