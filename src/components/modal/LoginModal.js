import React from 'react'
import '../../components/modal/stryle.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Initializing firebase authentication
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const LoginModal = ({ closeLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // handles login function
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
        <div className="w-screen h-screen bg-sky-950 fixed flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded bg-white w-[500px] h-[500px]">
                <div className="flex justify-end mb-10">
                    <button className="flex justify-end" onClick={() => { closeLogin() }}> X </button>
                </div>
                <h1 className=" text-center font-black text-2xl mb-10">Login</h1>
                <form className=" flex flex-col items-center justify-center w-80 " onSubmit={handleLogin}>
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

export default LoginModal