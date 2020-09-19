import React from 'react';
import { FaFootballBall } from 'react-icons/fa';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div>
            <div className='bg-blue-900 w-full p-2'>
                <div className='text-2xl text-gray-100 font-semibold'>Sports <span className='text-orange-700'><FaFootballBall className='inline mb-2' size={35}/></span> Pools</div>
            </div>
            <div className='flex justify-center bg-blue-800 w-full p-1 text-gray-200'>
                    <NavLink title='POOLS' 
                        links={[
                            {name: 'Pool Home', slug: '/pool'}, 
                            {name: 'My Pools', slug: '/my-pools'},
                            {name: 'Start Pool', slug: '/start-pool'},
                            {name: 'Join Pool', slug: '/join-pool'}
                        ]} 
                    />
                    <NavLink title='PICKS' 
                        links={[
                            {name: 'Place Picks', slug: '/place-picks'}, 
                            {name: 'My Picks', slug: '/my-picks'},
                            {name: 'Pool Picks', slug: '/pool-picks'},
                            {name: 'Picks History', slug: '/picks-history'}
                        ]} 
                    />
                    <NavLink title='REPORTS' 
                        links={[
                            {name: 'Standings', slug: '/standings'}, 
                            {name: 'League Scores', slug: '/league-scores'},
                            {name: 'Spread', slug: '/spread'}
                        ]} 
                    />
                    <NavLink title='HELP' 
                        links={[
                            {name: 'Rules', slug: '/rules'}, 
                            {name: 'FAQs', slug: '/faqs'},
                            {name: 'TOS', slug: '/tos'},
                            {name: 'Contact', slug: '/contact'}
                        ]} 
                    />
            </div>
        </div>
    )
}

export default Navbar
