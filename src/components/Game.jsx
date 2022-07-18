import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';

const Game = () => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.currentUser) {
            console.log('User not authenticated');
            navigate('/login');
        } else {
            console.log('User authenticated');
        }
    }, [])

    return (
        <>
            <div className='text-3xl flex justify-center'>Game</div>
            <div className='text-3xl flex justify-center'>Hi</div>
        </>
    )
}

export default Game;