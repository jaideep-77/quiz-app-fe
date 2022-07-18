import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';

const Home = () => {

    if (!auth.currentUser) {
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
        return (
            <>
                <div className='flex justify-center bg-gradient-to-b from-indigo-600 to-indigo-300 h-screen w-full pt-10 mx-auto'>
                    <h1>
                        Welcome {auth.currentUser.displayName ? auth.currentUser.displayName : auth.currentUser.email}
                    </h1>
                    <Link to='/Game'>
                        <button className='border-2 border-blue-400 bg-blue-600 px-3 py-2 text-white w-[100px] hover:bg-pink-600'>Start Game</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default Home;