import React, { useState } from 'react';
import '../styles/loginModal.css';
import { useNavigate } from 'react-router-dom';

// Initializing firebase authentication
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


export const LoginPopup = ( ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const navigate = useNavigate();

    const handleLogin = ((e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate("/clienthome")
            alert("Signed in successfully")
        }).catch((err) => {
            alert("Invalid user details")
        })
    })

    return (
        <div className=" fixed justify-center items-center w-full h-screen m-0  ">
            <div className="flex flex-col rounded-md bg-gray-200 w-96 h-96 items-center justify-center" >
                <h1 className="font-black text-2xl	 mb-10 ">Login</h1>
                <form className=" flex flex-col items-center justify-center w-80" onSubmit={handleLogin}>
                    <label 
                        for="email"
                        className="w-72 font-medium" 
                        >Email:</label>
                    <input 
                        className="mb-5 w-72 h-8" 
                        type="email" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label 
                        className="w-72 font-medium" 
                        for="password"
                    >Password:</label>
                    <input 
                        className="mb-5 h-8 w-72" 
                        type="password" 
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="text-white rounded-md h-8 mt-5 bg-sky-950 font-extrabold w-56 ">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPopup;