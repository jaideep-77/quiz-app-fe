import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Auth/AuthProvider';
import Navbar from './Navbar';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div name='dashboard' className='bg-gradient-to-b from-indigo-600 to-indigo-300 h-screen w-full pt-[60px]'>
            <div>
                <div className='text-xl'>Welcome {user?.displayName}</div>
                <div className='text-xl'>Hi</div>
                <Link to='/game'>Game</Link>
            </div>
        </div>
    )
}

export default Dashboard;