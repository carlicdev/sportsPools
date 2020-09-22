import React, { useContext } from 'react'
import { SessionContext } from '../../context/session-context';
import { poolsheet } from '../../data';
import PicksheetGame from './PicksheetGame';

const Picksheet = () => {
    const { user } = useContext(SessionContext);

    return (
        <div className='p-5'>
            <table className='border-collapse border-2 border-blue-800 mx-auto'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Kickoff</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Away</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Home</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Result</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Pick</th>
                    </tr>
                </thead>
                <tbody>
                {
                    poolsheet.map(game => {
                        return <PicksheetGame key={game.id} game={game} />
                    })
                }
                </tbody>
            </table>
                {
                    user ? (
                        <button className='bg-blue-800 text-gray-100 px-4 py-2 font-medium focus:outline-none hover:bg-blue-700 mt-1 rounded shadow'>
                            Place Picks
                        </button>
                    ) : (
                        <div className='p-5 shadow max-w-xs bg-gray-300 mt-2 mx-auto text-gray-900 font-medium text-md'>
                            Please login to place your picks
                        </div>
                    )
                }
        </div>
    )
}

export default Picksheet
