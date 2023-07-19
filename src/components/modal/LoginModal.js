import React, { useEffect } from 'react'
import '../../components/modal/stryle.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { collection, getDocs, where, query } from 'firebase/firestore'
import { useUserAuth } from '../../components/context/UserAuthContext';
import { auth } from '../../config/firebase';


const LoginModal = ({ closeLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userRole, setUserRole] = useState("")
    const { logIn, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()

        setError("");

        try {
            await logIn(email, password);

            const userRef = query(collection(db, "users"), where("userID", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(userRef);

            querySnapshot.forEach((doc) => {
                setUserRole(doc.data().userID);
            })

            if (auth.currentUser.uid === userRole) {
                navigate("/adminhome")
                console.log("working admin user")
            } else {
                navigate("/clienthome")
                console.log("client user")
            }

        } catch (err) {
            // setError()
            console.log(err.message);
        }

        console.log(userRole);
    }

    // useEffect(() => {

    //     // async function fetchUserId() {
    //     //     const userRef = collection(db, "users")
    //     //     const q = query(userRef, where("userID", "==", auth.currentUser.uid));
    //     //     const querySnapshot = await getDocs(q);
    //     //     if (querySnapshot.empty) {
    //     //         console.log("No matching documents")
    //     //     } else {
    //     //         querySnapshot.forEach((doc) => {
    //     //             // console.log("checking ", doc.data().userID);
    //     //             setUserRole(doc.data().userID)
    //     //         })
    //     //     }
    //     // }
    //     // console.log(userRole)

    //     // if (fetchUserId) {
    //     //     if (userRole) { console.log(userRole)
    //     //         navigate("/adminhome")
    //     //     } else {
    //     //         navigate("/clienthome")
    //     //     }
    //     // } else {
    //     //     navigate("/")
    //     //     console.log("user does not exist")
    //     // }

    //     const fetchUserId = async () => {
    //         try {
    //             const userRef = query(collection(db, "users"), where("userID", "==", auth.currentUser.uid));
    //             const querySnapshot = await getDocs(userRef);

    //             querySnapshot.forEach((doc) => {
    //                 // console.log("checking ", doc.data().userID);
    //                 setUserRole(doc.data().userID)
    //             })
    //         } catch (err) {
    //             console.log("Error fetching user data", err)
    //         }
    //     };

    //     fetchUserId()

    // }, [ ]);



    return (
        <div className="w-screen h-screen bg-sky-950 fixed flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded bg-white w-[500px] h-[500px]">
                <button className="flex justify-end" onClick={() => { closeLogin() }}> X </button>
                <h1 className=" text-center font-black text-2xl mb-10">Login</h1>
                <form className=" flex flex-col items-center justify-center w-80 " onSubmit={handleLogin}>
                    <label
                        htmlFor="email"
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
                        htmlFor="password"
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