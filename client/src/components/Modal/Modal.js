import React, { useState, useEffect} from 'react'
import './Modal.css';
import { RiCloseCircleFill } from 'react-icons/ri';
import NewPool from '../Pools/NewPool';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowModal(true), 1000);
    }, []);

    return (
        <>
        {
            showModal && (
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal'>
                <div className='relative w-auto my-6 mx-auto max-w-md bg-gray-100 rounded p-1'>
                    <button className='absolute text-red-700  hover:text-red-800 focus:outline-none modal-close' onClick={() => setShowModal(false)}>
                        <RiCloseCircleFill size={40}/>
                    </button>
                    <div className='p-5'>
                        <NewPool />
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}

export default Modal
