import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (<>
            Loading...
        </>)
    }

    if (error) {
        alert('Error occured. Redirecting to home page');
        console.log(error.message);
        navigate('/');
    }

    if (user === null) {
        return (
            <>
                <div className='flex flex-col items-center bg-gradient-to-b from-indigo-600 to-indigo-300 h-screen w-full pt-10 mx-auto'>
                    <p className='text-3xl text-white border-b-4 border-pink-600'>Trivia</p>
                    <div className='flex justify-center space-x-10 my-10'>
                        <Link to='/Login'>
                            <button className='border-2 border-blue-400 bg-blue-600 px-3 py-2 text-white w-[100px] hover:bg-pink-600'>Login</button>
                        </Link>
                        <Link to='/Register'>
                            <button className='border-2 border-blue-400 bg-blue-600 px-3 py-2 text-white w-[100px] hover:bg-pink-600'>Register</button>
                        </Link>
                    </div>
                    <Outlet />
                </div>
            </>
        )
    } else {
        navigate('/game');
    }
}

export default Home;