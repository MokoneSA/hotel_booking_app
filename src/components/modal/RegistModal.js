import React, { useState } from 'react';
import '../../components/modal/stryle.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';


export const Register = ({ closeRegister }) => {

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
        <div className="modalBackground w-screen h-screen bg-sky-950 fixed flex justify-center items-center">
            <div  className="modalContainer flex flex-col items-center justify-center">
                <button className="mt-10-" onClick={() => {closeRegister()}}> X </button>
                <h2 className="font-black text-2xl mt-4 mb-10 ">Register</h2>
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