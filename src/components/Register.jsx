import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username && password && password2) {
            if (password !== password2) {
                alert('Passwords do not match');
                return;
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input type="email" placeholder='Enter email' required onChange={(e) => { setUsername(e.target.value) }} className='border-2 border-red-600 rounded-md px-2' />
                <input type="text" placeholder='Enter username' onChange={(e) => { setUsername(e.target.value) }} className='border-2 border-red-600 rounded-md px-2 mt-1' />
                <input type='password' placeholder='Enter password' required onChange={(e) => { setPassword(e.target.value) }} className='border-2 border-red-600 rounded-md mt-1 px-2' />
                <input type='password' placeholder='Re-enter password' required onChange={(e) => { setPassword2(e.target.value) }} className='border-2 border-red-600 rounded-md mt-1 px-2' />
                <button className='border-2 bg-slate-600 text-white px-5 mt-4 hover:bg-gray-700' type='submit'>Register</button>
            </form>
        </>
    )
}

export default Register