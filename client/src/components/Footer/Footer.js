import React from 'react';
import { Link } from 'react-router-dom';
import { FaFootballBall } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-blue-800 p-5 flex flex-wrap mt-10'>
                <div className='text-2xl text-gray-100 font-medium logo text-left lg:self-center lg:mx-auto'>
                    <Link to='/'>
                        Sports <span className='text-orange-600'><FaFootballBall className='inline mb-2' size={35}/></span> Pools
                    </Link>
                </div>
                <div className='container mt-10 lg:w-1/2 lg:mt-1 mr-1 ml-auto'>
                    <div className='flex flex-wrap max-w-xl mr-1 ml-auto'>
                        <div className='container text-justify md:w-1/4 w-full mb-5 '>
                            <div className='font-medium mb-4 text-gray-200'>POOLS</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='pools'>Pools Home</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='my-pools'>My Pools</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='new-pool'>New Pool</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='join-pool'>Join Pool</Link>
                            </div>
                        </div>
                        <div className='container text-justify md:w-1/4 w-full mb-5'>
                            <div className='font-medium mb-4 text-gray-200'>PICKS</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='place-picks'>Place Picks</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='my-picks'>My Picks</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='pool-picks'>Pool Picks</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='picks-history'>Picks History</Link>
                            </div>
                        </div>
                        <div className='container text-justify md:w-1/4 w-full mb-5'>
                            <div className='font-medium mb-4 text-gray-200'>REPORTS</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='standings'>Standings</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='league-scores'>League Scores</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='spread'>Spread</Link>
                            </div>
                        </div>
                        <div className='container text-justify md:w-1/4 w-full mb-5'>
                            <div className='font-medium mb-4 text-gray-200'>HELP</div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='rules'>Rules</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='faqs'>FAQs</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='tos'>TOS</Link>
                            </div>
                            <div className='text-sm text-gray-400 font-thin mb-1'>
                                <Link to='contact'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer
