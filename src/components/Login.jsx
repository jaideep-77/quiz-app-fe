import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            console.log(`${email} -> ${password}`);
        } else {
            alert('Fill out the fields');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} className='border-2 border-red-600 rounded-md px-2' />
                <input type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} className='border-2 border-red-600 rounded-md mt-1 px-2' />
                <button className='border-2 bg-slate-600 text-white px-5 mt-4 hover:bg-slate-700' type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login