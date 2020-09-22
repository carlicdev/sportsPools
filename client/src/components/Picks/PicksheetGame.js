import React from 'react'

const PicksheetGame = ({game}) => {
    return (
        <tr className='bg-gray-200'>
            <td className="border border-blue-400 px-4 py-2">{game.kickoff}</td>
            <td className="border border-blue-400 px-4 py-2">{game.away}</td>
            <td className="border border-blue-400 px-4 py-2">{game.home}</td>
            <td className="border border-blue-400 px-4 py-2">{game.result}</td>
            <td className="border border-blue-400 px-4 py-2">{game.pick}</td>
        </tr>
    )
}

export default PicksheetGame
