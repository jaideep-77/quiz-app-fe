import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await signInWithEmailAndPassword(auth, email, password);

            if (data) {
                console.log(`${data.user.email} signed in`);
                alert(`Welcome ${data.user.displayName ? data.user.displayName : data.user.email}`);
                navigate('/dashboard');
            }
        }
        catch (err) {
            console.log(err);
            alert('Error occured. Try again.');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input type="email" placeholder='Email' required onChange={(e) => { setEmail(e.target.value) }} className='border-2 border-red-600 rounded-md px-2' />
                <input type='password' placeholder='Password' required onChange={(e) => { setPassword(e.target.value) }} className='border-2 border-red-600 rounded-md mt-1 px-2' />
                <button className='border-2 bg-slate-600 text-white px-5 mt-4 hover:bg-slate-700' type='submit'>Login</button>
            </form>
        </>
    );
}

export default Login