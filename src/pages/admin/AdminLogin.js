import React, { useState } from 'react';
import '../styles/adminlogin.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';


export const AdminLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ((e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(() => {
            alert("Signed in successfully")
        }).catch((err) => {
            alert("Invalid user details")
        })
    })

    return (
        <div className="adminLogin">
            <div className="login-container">
                <span className="logo">
                    <img />
                </span>
                <h2 className="login-heading">Admin Login</h2>
                <form className="adminLogin-form" onSubmit={handleLogin}>
                    <label className="login-lbl">Email</label>
                    <input 
                        className="login-input" 
                        type="email" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="login-lbl">Password</label>
                    <input 
                        className="login-input" 
                        type="password" 
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-btn">Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;