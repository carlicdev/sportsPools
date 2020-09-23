import React from 'react'

const Participants = ({participants}) => {
    return (
        <div>
            <table className='border-collapse border-2 border-blue-800 mx-auto'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Position</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Member</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Points</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Wins</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Losses</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>Draws</th>
                        <th className='px-4 py-2 text-gray-100 bg-blue-900'>%</th>
                    </tr>
                </thead>
                <tbody>
                {
                    participants.map(i => {
                        const total = i.record.wins + i.record.losses + i.record.draws;
                        return (
                        <tr className='bg-gray-200' key={i._id}>
                            <td className='border border-blue-400 px-4 py-2'>{participants.indexOf(i) + 1}</td>
                            <td className='border border-blue-400 px-4 py-2'>{i.userId.username}</td>
                            <td className='border border-blue-400 px-4 py-2'>{i.record.wins}</td>
                            <td className='border border-blue-400 px-4 py-2'>{i.record.wins}</td>
                            <td className='border border-blue-400 px-4 py-2'>{i.record.losses}</td>
                            <td className='border border-blue-400 px-4 py-2'>{i.record.draws}</td>
                            <td className='border border-blue-400 px-4 py-2'>{(i.record.wins / total).toString()}</td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Participants
