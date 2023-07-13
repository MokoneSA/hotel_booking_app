import React from 'react'
import '../../components/modal/stryle.css'
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
// import useAuth from '../../hooks/useAuth';

// Initializing firebase authentication
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../config/firebase';

const LoginModal = ({ closeLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signIn(email, password)
            navigate("/adminhome")
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }


    // handles login function
    // const handleLogin = ((e) => {
    //     e.preventDefault()

    //     signInWithEmailAndPassword(auth, email, password).then(() => {
    //         navigate("/clienthome")
    //         alert("Signed in successfully")

    //     }).catch((err) => {
    //         alert("Invalid user details")
    //     })
    // })

    return (
        <div className="w-screen h-screen bg-sky-950 fixed flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded bg-white w-[500px] h-[500px]">
                <button className="flex justify-end" onClick={() => { closeLogin() }}> X </button>
                <h1 className=" text-center font-black text-2xl mb-10">Login</h1>
                <form className=" flex flex-col items-center justify-center w-80 " onSubmit={handleSubmit}>
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
                <p className="mt-6">Don't have an account? <Link to="/register"><span className="text-sky-800 font-semibold">Register</span></Link></p>
            </div>
        </div>
    )
}

export default LoginModal