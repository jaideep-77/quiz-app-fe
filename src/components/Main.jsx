import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Main = ({ user }) => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col bg-gradient-to-b from-indigo-600 to-indigo-300 h-screen w-full'>
            <Navbar />
            <div className='mt-[80px]'>
                <div className='text-xl'>Welcome {user?.displayName}</div>
                <div className='text-xl'>Hi</div>
            </div>
        </div>
    )
}

export default Main;