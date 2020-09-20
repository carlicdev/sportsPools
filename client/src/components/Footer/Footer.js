import React from 'react';
import { Link } from 'react-router-dom';
import { FaFootballBall } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-blue-800 p-5 flex flex-wrap'>
                <div className='text-2xl text-gray-100 font-medium logo text-left lg:self-center lg:mx-auto'>
                    <Link to='/'>
                        Sports <span className='text-orange-600'><FaFootballBall className='inline mb-2' size={35}/></span> Pools
                    </Link>
                </div>
                <div className='container mt-10 lg:w-1/2 lg:mt-1 mr-1 ml-auto'>
                    <div className='flex flex-wrap max-w-xl mr-1 ml-auto'>
                        <div className='container text-justify md:w-1/4 w-full mb-5 '>
                            <div className='font-medium mb-4 text-gray-200'>POOLS</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Pools Home</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>My Pools</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Create Pool</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Join Pool</div>
                        </div>
                        <div className='container text-justify md:w-1/4 w-full mb-5'>
                            <div className='font-medium mb-4 text-gray-200'>PICKS</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Place Picks</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>My Picks</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Pool Picks</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Picks History</div>
                        </div>
                        <div className='container text-justify md:w-1/4 w-full mb-5'>
                            <div className='font-medium mb-4 text-gray-200'>REPORTS</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Standings</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>League Scores</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Spread</div>
                        </div>
                        <div className='container text-justify md:w-1/4 w-full mb-5'>
                            <div className='font-medium mb-4 text-gray-200'>HELP</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Rules</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>FAQs</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>TOS</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>Contact</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer
