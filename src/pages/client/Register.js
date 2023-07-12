import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';


export const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = ((e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            alert("Registered Successful");
        }).catch((error) => {

        })
    })


    return (
        <div className="h-screen flex flex-col justify-center items-center m-0 bg-sky-950 ">
            <div className="flex flex-col rounded-md bg-gray-200 w-96 h-96 items-center justify-center ">
                <h2 className="font-black text-2xl	 mb-10 ">Register</h2>
                <form className="adminLogin-form flex flex-col items-center justify-center w-80" onSubmit={handleRegister}>
                    <label  className="w-72 font-medium" for="email">Email:</label>
                    <input 
                        className="mb-5 h-8 w-72"
                        type="email" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label  className="w-72 font-medium" for="password">Password:</label>
                    <input 
                        className="mb-5 h-8 w-72" 
                        type="password" 
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="text-white rounded-md h-8 mt-5 bg-sky-950 font-bold w-56 ">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;