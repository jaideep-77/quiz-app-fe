import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const Game = ({ user }) => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col'>
            <Navbar className='mb-60'></Navbar>
            <div className='text-xl'>Welcome {user?.displayName}</div>
            <div className='text-xl'>Hi</div>
        </div>
    )
}

export default Game;