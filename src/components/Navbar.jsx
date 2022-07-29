import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setNav((prev) => { return (!prev) });
    }

    const logout = async () => {
        await signOut(auth).catch(err => {
            console.log(err);
        })
        navigate('/');
    }

    return (
        <div className='fixed w-full h-[40px] flex justify-end items-center px-16 text-gray-300'>
            {/* main menu */}

            <ul className='hidden md:flex space-x-5'>
                <Link to='/dashboard' className='hover:border-b-4 hover:border-pink-600 px-2'>Dashboard</Link>
                <button className='hover:border-b-4 hover:border-pink-600 px-2' onClick={logout}>Logout</button>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* phone menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <a href="/dashboard"> Dashboard </a>
                </li>
                <li className='py-6 text-4xl'>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>

        </div>
    )
}

export default Navbar;