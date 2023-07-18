import React from 'react'
import '../../components/modal/stryle.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore'
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import {auth} from '../../config/firebase'; 
import { useUserAuth } from '../../components/context/UserAuthContext';


const LoginModal = ({ closeLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userRole, setUserRole] = useState("")
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()

        setError("");

        try {
            await logIn(email, password);

            const userRef = collection(db, "users");
            const role = await getDocs(userRef);
            const filteredData = role.docs.map((doc) => doc.data().role);

            setUserRole(filteredData);

            if (userRole.includes('admin')) {
                navigate('/adminhome')
            } else {
                navigate('/clienthome')
            }

            console.log("Users data", userRole);


        } catch (err) {
            setError(err.message);
        }


        // signInWithEmailAndPassword(auth, email, password).then(() => {
        //     alert("Signed in successfully");
        //     navigate("/clienthome");

        // }).catch((err) => {
        //     setError(err)
        //     alert(error)
        // })
    }


    return (
        <div className="w-screen h-screen bg-sky-950 fixed flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded bg-white w-[500px] h-[500px]">
                <button className="flex justify-end" onClick={() => { closeLogin() }}> X </button>
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
                {error && <span className=" text-red-600 ">{error}</span>}
                <p className="mt-6">Don't have an account? <Link to="/register"><span className="text-sky-800 font-semibold">Register</span></Link></p>
            </div>
        </div>
    )
}

export default LoginModal