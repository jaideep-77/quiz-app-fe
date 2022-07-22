import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Register = () => {
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password && password2) {
            if (password !== password2) {
                alert('Passwords do not match');
                return;
            }

            try {
                await createUserWithEmailAndPassword(auth, email, password).catch((err) => {
                    console.log(err);
                });

                await updateProfile(auth.currentUser, { displayName: username }).catch((err) => {
                    console.log(err);
                });
                navigate('/login');

            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input type="email" placeholder='Enter email' required onChange={(e) => { setEmail(e.target.value) }} className='border-2 border-red-600 rounded-md px-2' />
                <input type="text" placeholder='Enter username' onChange={(e) => { setUsername(e.target.value) }} className='border-2 border-red-600 rounded-md px-2 mt-1' />
                <input type='password' placeholder='Enter password' required onChange={(e) => { setPassword(e.target.value) }} className='border-2 border-red-600 rounded-md mt-1 px-2' />
                <input type='password' placeholder='Re-enter password' required onChange={(e) => { setPassword2(e.target.value) }} className='border-2 border-red-600 rounded-md mt-1 px-2' />
                <button className='border-2 bg-slate-600 text-white px-5 mt-4 hover:bg-gray-700' type='submit'>Register</button>
            </form>
        </>
    )
}

export default Register