import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, links } = props;

    return (
        <div className='relative'>
            <button 
                className='block focus:outline-none focus:bg-blue-700 py-1 px-2 rounded mx-1'
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>
            {
                isOpen && (
                    <div className='absolute right-0 mt-2 py-2 w-48 bg-blue-700 px-1 rounded-b rounded-tl shadow'>
                        <ul>
                            {
                                links.map(link => {
                                    return (
                                            <Link to={link.slug} key={link.name}>
                                                <li className='hover:bg-blue-800 rounded my-1 p-2'>
                                                        {link.name}
                                                </li>
                                            </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default NavLink
