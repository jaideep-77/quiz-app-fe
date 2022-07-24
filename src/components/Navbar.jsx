import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav((prev) => { return (!prev) });
    }

    const logout = async () => {
        await signOut(auth).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='fixed w-full h-[40px] flex justify-end items-center px-4 text-gray-300'>
            {/* main menu */}

            <ul className='hidden md:flex space-x-5'>
                <Link to='/main' className='hover:border-b-4 hover:border-pink-600 px-2'>Home</Link>
                <button className='hover:border-b-4 hover:border-pink-600 px-2' onClick={logout}>Logout</button>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* phone menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <a href="/"> Home </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/about"> About </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/experience"> Experience </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/skills"> Skills </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/projects"> Projects </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/contact"> Contact </a>
                </li>
            </ul>

        </div>
    )
}

export default Navbar;