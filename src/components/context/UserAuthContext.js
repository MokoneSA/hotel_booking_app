import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import { auth } from '../../config/firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState({});


    // Login function
    const logIn = async (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
        
    }

    // Sign up function
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign out function
    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    console.log(user);
    return (
        <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}