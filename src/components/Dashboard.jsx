import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Auth/AuthProvider';
import Navbar from './Navbar';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='flex flex-col bg-gradient-to-b from-indigo-600 to-indigo-300 h-screen w-full'>
            <Navbar />
            <div className='mt-[80px]'>
                <div className='text-xl'>Welcome {user?.displayName}</div>
                <div className='text-xl'>Hi</div>
                <Link to='/game'>Game</Link>
            </div>
        </div>
    )
}

export default Dashboard;