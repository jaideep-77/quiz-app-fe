import { signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Spinner from '../components/Spinner';
import { auth } from "../firebase/firebase-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    if (loading) return (<>
        <div>
            <Spinner />
        </div>
    </>)

    if (error) {
        alert('Error occured.');
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export const Signout = async () => {
    localStorage.setItem('token', '');
    await signOut(auth).catch(err => {
        console.log(err);
    })
}

export default AuthContext;